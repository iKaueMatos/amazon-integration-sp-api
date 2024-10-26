import { Injectable } from '@nestjs/common';

import { Either, left, right } from '@core/logic/Either';

// type GetUserByEmailResponse = Either<
//   EmailBadFormattedError | UserByEmailNotFoundError,
//   User
// >;

// @Injectable()
// export class GetUserByEmailUseCase {
//   constructor(private readonly usersRepository: UsersRepository) {}

//   async handle(email: string): Promise<GetUserByEmailResponse> {
//     const isInvalidEmail = !Email.validate(email);

//     if (isInvalidEmail) {
//       return left(new EmailBadFormattedError(email));
//     }

//     const user = await this.usersRepository.findByEmail(email);

//     if (!user) {
//       return left(new UserByEmailNotFoundError(email));
//     }

//     return right(user);
//   }
// }
