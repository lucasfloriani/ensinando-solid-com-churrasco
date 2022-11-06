// Para aplicarmos corretamente o principio de Substituição de Liskov,
// nós iremos alterar a lógica para realmente aplica-la, fazendo assim
// com que cada classe só tenha que ter (metodos e/ou propriedades que precisa)
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
    // Lógica usando taxa de sangramento
    return this.modoDePreparo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNota(): number {
    return this.nota;
  }
}

// Utilizando uma interface que condiz corretamente com os atributos e metodos
// usados pelas classes que implementam ela, fazendo assim com que tenhamos
// o principio de Substituição de Liskov em nosso código.
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
