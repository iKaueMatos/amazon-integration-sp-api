interface ItemIdentifiers {
    MarketplaceId: string; // Identificador do marketplace
    Identifiers: ItemIdentifier[];
  }
  
  interface ItemIdentifier {
    IdentifierType: string; // Tipo do identificador, como UPC, EAN ou ISBN
    Identifier: string; // O identificador em si
  }
  
  interface ItemAttributes {
    Title: string; // Nome do item
    Brand?: string; // Marca do item
    [key: string]: any; // Outros atributos dinâmicos
  }
  
  interface ItemDimension {
    Unit?: string; // Unidade de medida (ex: "cm", "kg")
    Value?: number; // Valor da dimensão
  }
  
  interface ItemDimensions {
    Height?: ItemDimension; // Altura do item
    Length?: ItemDimension; // Comprimento do item
    Width?: ItemDimension; // Largura do item
    Weight?: ItemDimension; // Peso do item
  }
  
  interface ItemImage {
    Variant: string; // Variante da imagem (ex: "MAIN", "PT01")
    Link: string; // URL da imagem
    Height: number; // Altura da imagem em pixels
    Width: number; // Largura da imagem em pixels
  }
  
  interface ItemBrowseClassification {
    DisplayName: string; // Nome exibido da classificação
    ClassificationId: string; // ID da classificação
    Parent?: ItemBrowseClassification; // Classificação pai
  }
  
  interface ItemSalesRank {
    MarketplaceId: string; // Identificador do marketplace
    ClassificationRanks?: ItemClassificationSalesRank[]; // Classificações por classificação
    DisplayGroupRanks?: ItemDisplayGroupSalesRank[]; // Classificações por grupo de exibição
  }
  
  interface ItemClassificationSalesRank {
    ClassificationId: string; // ID da classificação
    Title: string; // Nome da classificação
    Rank: number; // Valor da classificação
  }
  
  interface ItemDisplayGroupSalesRank {
    WebsiteDisplayGroup: string; // Nome do grupo de exibição do site
    Rank: number; // Valor da classificação
  }
  
  interface ItemSummary {
    MarketplaceId: string; // Identificador do marketplace
    AdultProduct?: boolean; // Indica se o item é para adultos
    Autographed?: boolean; // Indica se o item é autografado
    Brand?: string; // Marca do item
    Color?: string; // Cor do item
    Contributors?: ItemContributor[]; // Contribuidores do item
    ItemClassification?: string; // Classificação do item
    ItemName?: string; // Nome do item
    Manufacturer?: string; // Fabricante do item
    ReleaseDate?: string; // Data de lançamento
    Size?: string; // Tamanho do item
    TradeInEligible?: boolean; // Indica se o item é elegível para troca
  }
  
  interface ItemContributor {
    Role: string; // Papel do contribuinte (ex: autor, ator)
    Value: string; // Nome do contribuinte
  }
  
  interface Item {
    ASIN: string; // Amazon Standard Identification Number
    Identifiers: ItemIdentifiers; // Identificadores do item
    Attributes: ItemAttributes; // Atributos do item
    Images: ItemImage[]; // Imagens do item
    Dimensions?: ItemDimensions; // Dimensões do item
    BrowseClassifications?: ItemBrowseClassification[]; // Classificações do item
    SalesRanks?: ItemSalesRank[]; // Classificações de vendas
    Summaries?: ItemSummary[]; // Resumos do item
  }
  
  interface CatalogItemsResponse {
    Items: Item[]; // Lista de itens do catálogo
  }
  