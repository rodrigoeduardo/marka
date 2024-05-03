export enum Unit {
  MILILITRO = "ML",
  LITRO = "LT",
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
};

export const PRODUCTS_MAP: Record<ProductName, Product> = {
  // LIMPADORES
  [ProductName.LIMPADOR_QUADRO_BCO_100ML]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 100,
    unit: Unit.MILILITRO,
    serialNumber: 13,
  },
  [ProductName.LIMPADOR_QUADRO_BCO_500ML]: {
    type: ProductType.LIMPADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITRO,
    serialNumber: 14,
  },

  // TINTAS

  // -- AZUL
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_1LT]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 1,
    unit: Unit.LITRO,
    serialNumber: 28,
    color: Color.BLUE,
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITRO,
    serialNumber: 16,
    color: Color.BLUE,
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_AZUL_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITRO,
    serialNumber: 7,
    color: Color.BLUE,
  },

  // -- PRETO
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_1LT]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 1,
    unit: Unit.LITRO,
    serialNumber: 27,
    color: Color.BLACK,
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITRO,
    serialNumber: 15,
    color: Color.BLACK,
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_PRETO_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITRO,
    serialNumber: 6,
    color: Color.BLACK,
  },

  // -- VERMELHO
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_VERMELHO_500ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 500,
    unit: Unit.MILILITRO,
    serialNumber: 17,
    color: Color.RED,
  },
  [ProductName.TINTA_MARCADOR_QUADRO_BCO_VERMELHO_20ML]: {
    type: ProductType.TINTA_MARCADOR_QUADRO_BCO,
    quantity: 20,
    unit: Unit.MILILITRO,
    serialNumber: 8,
    color: Color.RED,
  },
};

export const PRODUCTS = Object.values(PRODUCTS_MAP);
