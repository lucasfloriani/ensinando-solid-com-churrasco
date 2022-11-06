class Churrasqueiro {
  public name: string;
  public itemsParaAssar: object[];
  // ===================================================
  // Propriedades extras que não tem a ver com o Churrasqueiro
  // ===================================================
  public dinheiro: number;
  public quantidadeDeGasolina: number;

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

  // ===================================================
  // Metodos extras que não tem a ver exclusivamente com o Churrasqueiro
  // ===================================================
  reunirDinheiroParaItems(): void {}
  abastecerOCarro(): void {}
  comprarItems(listaDeItems: string[]): void {}
}
