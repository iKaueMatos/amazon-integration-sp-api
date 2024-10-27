export interface CatalogItemsQuery {
    /**
     * O ID do marketplace em que você está consultando itens.
     * Por exemplo: 'ATVPDKIKX0DER' para Amazon.com (EUA).
     */
    MarketplaceId: string;
  
    /**
     * O número de identificação padrão da Amazon (ASIN) do item.
     * Necessário se você estiver buscando informações de um item específico.
     */
    ASIN?: string;
  
    /**
     * (Opcional) A condição do item, como 'new' ou 'used'.
     */
    ItemCondition?: string;
  
    /**
     * (Opcional) O código de localidade, como 'en_US' para inglês dos EUA.
     */
    Locale?: string;
  
    /**
     * (Opcional) O ID do vendedor cujos itens você deseja consultar.
     */
    SellerId?: string;
  
    /**
     * (Opcional) Um token de paginação para obter a próxima página de resultados.
     */
    PaginationToken?: string;
  
    /**
     * (Opcional) Um número que limita o número de resultados retornados.
     */
    Limit?: number;
}
  