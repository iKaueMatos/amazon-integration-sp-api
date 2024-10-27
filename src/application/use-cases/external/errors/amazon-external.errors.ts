import { DomainError } from '@core/domain/errors/DomainError';

export class AmazonExternalErrors extends Error implements DomainError {
  constructor(error: string) {
    super(`${error}`);
    this.name = 'AmazonExternal';
  }
}
