import { DomainError } from '@core/domain/errors/DomainError';

export class CatalogItemsNotFoundError extends Error implements DomainError {
  constructor(items: string[]) {
    super(`Catalog '${items}' was not found.`);
    this.name = 'CatalogItems';
  }
}
