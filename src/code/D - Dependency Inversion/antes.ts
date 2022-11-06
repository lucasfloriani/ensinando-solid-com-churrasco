interface ModoDePreparo {
  getModoDePreparo(): string;
}

interface Nome {
  getNome(): string;
}

interface Nota {
  getNota(): number;
}

class Carne implements ModoDePreparo, Nome, Nota {
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

class Abacaxi implements ModoDePreparo, Nome, Nota {
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

class PaoDeAlho implements ModoDePreparo, Nome, Nota {
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
  // Dependency Inversion explica que nosso código deveria depender
  // de abstrações e não de classes concretas.
  //
  // Com base nessa afirmação, nós tentaremos sempre utilizar-se de
  // classes abstratas ou interfaces pois elas são mais fáceis de implementar
  // e porque deixam nossos códigos mais fáceis de modificar, impedindo assim
  // de quebrarmos a regra do Open Closed do SOLID tambem
  //
  // Iremos utilizar a interface ModoDePreparar pois é o unico metodo que precisamos
  // para o nosso Churrasqueiro
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
