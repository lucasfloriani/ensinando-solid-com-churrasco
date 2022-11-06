class Carne {
  public nome: string;
  public tipoDeCarne: "Bovino" | "Suino";
  public corteDaCarne: string;
  private taxaDeSangramento: number;
  private modoDePreparo: string;

  constructor(
    nome: string,
    tipoDeCarne: "Bovino" | "Suino",
    corteDaCarne: string,
    taxaDeSangramento: number,
    modoDePreparo: string
  ) {
    this.nome = nome;
    this.tipoDeCarne = tipoDeCarne;
    this.corteDaCarne = corteDaCarne;
    this.taxaDeSangramento = taxaDeSangramento;
    this.modoDePreparo = modoDePreparo;
  }

  public getModoDePreparo(): string {
    this.taxaDeSangramento;
    // Lógica usando taxa de sangramento
    return this.modoDePreparo;
  }
}

// Digamos que agora nós queremos não somente assar carne na churrasqueira,
// porem tambem queremos fazer um pão de alho ou até mesmo um abacaxi com canela.
//
// Para fazermos isto nós precisariamos ter uma ordem correta de subclasses
// no qual tambem teriam o metodo de modo de preparo para o Churrasqueiro.
//
// A regra de Substituição de Liskov diz que se a regra for aplicada corretamente,
// nós podemos substituir a classe pai pela classe filha sem ter problemas no código
//
// Outro ponto seria que uma classe com herança (Classe filha),
// pode ser confirmada como correta quando nós cumprimos com o contrato que a
// classe pai propoem, como por exemplo a utilização de suas propriedades e metodos.
//
// Um exemplo da não utilização deste principio seria o código abaixo,
// o qual nos demonstra facilmente que estas classes filhas estão incorretas
// pois nenhuma delas é uma carne e nenhuma delas tem taxa de sangramento,
// sendo somente uma forma preguiçosa de reunar a class Carne para não refatorar
// corretamente o código.
class Abacaxi extends Carne {
  public acidez: number;

  constructor(
    nome: string,
    tipoDeCarne: "Bovino" | "Suino",
    corteDaCarne: string,
    // Abacaxi não tem sangramento!
    taxaDeSangramento: number,
    modoDePreparo: string,
    acidez: number
  ) {
    super(nome, tipoDeCarne, corteDaCarne, taxaDeSangramento, modoDePreparo);
    this.acidez = acidez;
  }
}

class PaoDeAlho extends Carne {
  public tipoDoMolho: string;

  constructor(
    nome: string,
    tipoDeCarne: "Bovino" | "Suino",
    corteDaCarne: string,
    // Nem pão de alho tem sangramento!
    taxaDeSangramento: number,
    modoDePreparo: string,
    tipoDoMolho: string
  ) {
    super(nome, tipoDeCarne, corteDaCarne, taxaDeSangramento, modoDePreparo);
    this.tipoDoMolho = tipoDoMolho;
  }
}

class Churrasqueiro {
  public name: string;
  public itemsParaAssar: Carne[];

  constructor(name: string) {
    this.name = name;
  }

  public assarItems(items: Carne[]): void {
    this.prepararChurrasqueira();
    this.prepararItems(items);
    this.usarChurrasqueira(items);
    this.verificarItemsNaChurrasqueira(items);
  }

  private prepararChurrasqueira(): void {}
  private prepararItems(items: Carne[]): void {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item.getModoDePreparo();
    }
  }
  private usarChurrasqueira(items: Carne[]) {}
  private verificarItemsNaChurrasqueira(items: Carne[]) {}
}
