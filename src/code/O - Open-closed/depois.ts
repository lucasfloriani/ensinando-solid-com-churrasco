class Carne {
  public nome: string;
  public tipoDeCarne: "Bovino" | "Suino";
  public corteDaCarne: string;
  private modoDePreparo: string;

  constructor(
    nome: string,
    tipoDeCarne: "Bovino" | "Suino",
    corteDaCarne: string,
    modoDePreparo: string
  ) {
    this.nome = nome;
    this.tipoDeCarne = tipoDeCarne;
    this.corteDaCarne = corteDaCarne;
    this.modoDePreparo = modoDePreparo;
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
      // Separando esta lógica para a classe mais capacitada para lidar com isto,
      // nós não precisamos mais adicionar vários ifs e elses para lidar com
      // novos casos, pois agora cada Carne adicionada na lista tem as informações
      // de como lidar com seu preparo, nós como Churrasqueiros só precisamos
      // ler as instruções para termos um guia de como assar o item em questão
    }
  }
  private usarChurrasqueira(items: Carne[]) {}
  private verificarItemsNaChurrasqueira(items: Carne[]) {}
}
