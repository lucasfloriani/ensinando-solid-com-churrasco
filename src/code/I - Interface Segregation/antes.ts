// O principio de Segregação de Interfaces fala que um cliente da uma interface
// não deveria ser obrigado a implementar algo da interface que realmente não usa, ou
// clientes não deveriam depender de metodos que eles não usam
//
// O que podemos tirar de conclusão aqui é que não deveriamos criar interfaces grandes
// ou que tem mais de um propósito (Single Responsability), com isto dito nos devemos
// separar o metodo de pegar a nota (getNota) pois ela não tem relação com assar algo
interface ItemParaAssar {
  getModoDePreparo(): string;
  getNome(): string;
  getNota(): number;
}

class Carne implements ItemParaAssar {
  public nome: string;
  public nota: number;
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
    return this.modoDePreparo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNota(): number {
    return this.nota;
  }
}

class Abacaxi implements ItemParaAssar {
  public nome: string;
  public acidez: number;
  public nota: number;
  private modoDePreparo: string;

  constructor(nome: string, modoDePreparo: string, nota: number, acidez: number) {
    this.nome = nome;
    this.nota = nota;
    this.modoDePreparo = modoDePreparo;
    this.acidez = acidez;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNota(): number {
    return this.nota;
  }

  public getModoDePreparo(): string {
    return this.modoDePreparo;
  }
}

class PaoDeAlho implements ItemParaAssar {
  public nome: string;
  public nota: number;
  private modoDePreparo: string;

  public tipoDoMolho: string;

  constructor(nome: string, modoDePreparo: string, nota: number, tipoDoMolho: string) {
    this.nome = nome;
    this.nota = nota;
    this.modoDePreparo = modoDePreparo;
    this.tipoDoMolho = tipoDoMolho;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNota(): number {
    return this.nota;
  }

  public getModoDePreparo(): string {
    return this.modoDePreparo;
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
