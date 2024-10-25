import { Either, left, right } from "@core/logic/Either";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "@infra/database/repositories/users.repository";
import { User } from "@prisma/client";
import { UserByTokenNotFoundError } from "./errors/user-by-token-not-found.error";

type GetUserByTokenResponse = Either<
  UserByTokenNotFoundError,
  User
>;

// @Injectable()
// export class GetUserByTokenUseCase {
//   constructor(private readonly usersRepository: UsersRepository) {}

//   async handle(token: string): Promise<GetUserByTokenResponse> {
//     const user = await this.usersRepository.findByToken(token);

//     if (!user) {
//       return left(new UserByTokenNotFoundError(token));
//     }

//     const result: User = {
//         id: user.id,
//         email: user.token,
//         created_at: user.createdAt,
//         updated_at: user.updated_at
//     };

//     return right(result);
//   }
// }
