// Carro que usam pro churrasco
class Carro {
  public quantidadeDeGasolina: number;
}

class Pessoa {
  public dinheiro: number;
  public carro: Carro | null;

  // Estas ações (metodos) pode ser feito por qualquer um que vai
  // participar do churrasco, não é responsabilidade unica do Churrasqueiro,
  // a resposabilidade dele é cuidar dos itens a serem assados na churrasqueira
  abastecerOCarro(): void {}
  reunirDinheiroParaItems(): void {}
  comprarItems(listaDeItems: string[]): void {}
}

class Churrasqueiro {
  public name: string;
  public itemsParaAssar: object[];

  constructor(name: string) {
    this.name = name;
  }

  public assarItems(items: object[]): void {
    this.prepararChurrasqueira();
    this.prepararItems(items);
    this.usarChurrasqueira(items);
    this.verificarItemsNaChurrasqueira(items);
  }

  private prepararChurrasqueira(): void {}
  private prepararItems(items: object[]): void {}
  private usarChurrasqueira(items: object[]) {}
  private verificarItemsNaChurrasqueira(items: object[]) {}
}
