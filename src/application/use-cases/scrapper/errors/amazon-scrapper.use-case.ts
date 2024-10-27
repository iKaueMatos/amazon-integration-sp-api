import { DomainError } from '@core/domain/errors/DomainError';

export class AmazonScrapperErrors extends Error implements DomainError {
  constructor(message: string, error: string) {
    super(`${message}, error: ${error}`);
    this.name = 'AmazonScrapper';
  }
}
