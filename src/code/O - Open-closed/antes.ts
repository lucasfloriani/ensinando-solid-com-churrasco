class Carne {
  public nome: string;
  public tipoDeCarne: "Bovino" | "Suino";
  public corteDaCarne: string;

  constructor(nome: string, tipoDeCarne: "Bovino" | "Suino", corteDaCarne: string) {
    this.nome = nome;
    this.tipoDeCarne = tipoDeCarne;
    this.corteDaCarne = corteDaCarne;
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
      if (item.tipoDeCarne === "Bovino") {
        if (item.corteDaCarne === "Maminha") {
          // TODO: Modo de preparo
        } else if (item.corteDaCarne === "Contrafilé") {
          // TODO: Modo de preparo
        }
      } else if (item.tipoDeCarne === "Suino") {
        if (item.corteDaCarne === "Bisteca") {
          // TODO: Modo de preparo
        } else if (item.corteDaCarne === "Paleta") {
          // TODO: Modo de preparo
        }
      }
      // O que aconteceria se eu tivesse que adicionar o modo de preparo
      // para frango? Isso mesmo, eu teria que alterar a classe novamente,
      // fazendo assim com que eu quebra-se a regra do Open Closed.
      //
      // Como podemos resolver isso? Deixando a regra de como preparar um item
      // para assar dentro da própria classe do item, como em alguns casos
      // quando compramos uma carne e ela vem com algumas instruções por exemplo
    }
  }
  private usarChurrasqueira(items: Carne[]) {}
  private verificarItemsNaChurrasqueira(items: Carne[]) {}
}
