import { DomainError } from "@core/domain/errors/DomainError";

export class UserByTokenNotFoundError extends Error implements DomainError {
    constructor(token: string) {
      super(`User with token '${token}' was not found.`);
      this.name = 'UserNotFound';
    }
  }