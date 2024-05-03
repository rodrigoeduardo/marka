export enum Unit {
  MILILITER = "ML",
  LITER = "LT",
}

export enum Color {
  BLUE = "AZUL",
  BLACK = "PRETO",
  RED = "VERMELHO",
}

export enum ProductType {
  LIMPADOR_QUADRO_BCO = "LIMPADOR DE QUADRO BRANCO",
  TINTA_MARCADOR_QUADRO_BCO = "TINTA PARA MARCADOR DE QUADRO BRANCO",
}

export enum ProductName {
  LIMPADOR_QUADRO_BCO_100ML,
  LIMPADOR_QUADRO_BCO_500ML,
  LIMPADOR_QUADRO_BCO_1L,
  LIMPADOR_QUADRO_BCO_5L,

  TINTA_MARCADOR_QUADRO_BCO_AZUL_1LT,
  TINTA_MARCADOR_QUADRO_BCO_AZUL_500ML,
  TINTA_MARCADOR_QUADRO_BCO_AZUL_20ML,

  TINTA_MARCADOR_QUADRO_BCO_PRETO_1LT,
  TINTA_MARCADOR_QUADRO_BCO_PRETO_500ML,
  TINTA_MARCADOR_QUADRO_BCO_PRETO_20ML,

  TINTA_MARCADOR_QUADRO_BCO_VERMELHO_500ML,
  TINTA_MARCADOR_QUADRO_BCO_VERMELHO_20ML,
}

export type Product = {
  type: ProductType;
  quantity: number;
  unit: Unit;
  serialNumber: number;
  color?: Color;
  image: {
    url: string;
  };
};

export const PRODUCTS_MAP: Record<ProductName, Product> = {
  // LIMPADORES
  [ProductName.LIMPADOR_QUADRO_BCO_100ML]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 100,
    unit: Unit.MILILITER,
    serialNumber: 13,
    image: {
      url: "/assets/products/13.jpg",
    },
  },
  [ProductName.LIMPADOR_QUADRO_BCO_500ML]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITER,
    serialNumber: 14,
    image: {
      url: "/assets/products/14.jpg",
    },
  },
  [ProductName.LIMPADOR_QUADRO_BCO_1L]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 1,
    unit: Unit.LITER,
    serialNumber: 18,
    image: {
      url: "/assets/products/18.png",
    },
  },
  [ProductName.LIMPADOR_QUADRO_BCO_5L]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 5,
    unit: Unit.LITER,
    serialNumber: 19,
    image: {
      url: "/assets/products/19.png",
    },
  },

  // TINTAS

  // -- AZUL
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_1LT]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 1,
    unit: Unit.LITER,
    serialNumber: 28,
    color: Color.BLUE,
    image: {
      url: "/assets/products/28.jpg",
    },
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITER,
    serialNumber: 16,
    color: Color.BLUE,
    image: {
      url: "/assets/products/16.jpg",
    },
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITER,
    serialNumber: 7,
    color: Color.BLUE,
    image: {
      url: "/assets/products/7.jpg",
    },
  },

  // -- PRETO
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_1LT]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 1,
    unit: Unit.LITER,
    serialNumber: 27,
    color: Color.BLACK,
    image: {
      url: "/assets/products/27.jpg",
    },
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITER,
    serialNumber: 15,
    color: Color.BLACK,
    image: {
      url: "/assets/products/15.jpg",
    },
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITER,
    serialNumber: 6,
    color: Color.BLACK,
    image: {
      url: "/assets/products/6.jpg",
    },
  },

  // -- VERMELHO
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_VERMELHO_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITER,
    serialNumber: 17,
    color: Color.RED,
    image: {
      url: "/assets/products/17.jpg",
    },
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_VERMELHO_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITER,
    serialNumber: 8,
    color: Color.RED,
    image: {
      url: "/assets/products/8.jpg",
    },
  },
};

export const PRODUCTS = Object.values(PRODUCTS_MAP);
