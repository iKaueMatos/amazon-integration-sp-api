import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

// import { DatabaseModule } from '@infra/database/database.module';
import { ComplexityPlugin } from '@infra/http/graphql/complexity-plugin';
import { ExampleResolver } from '@infra/http/graphql/resolvers/example.resolver';

@Module({
  imports: [
    // DatabaseModule,

    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      plugins: [new ComplexityPlugin(20)],
      // subscriptions: {
      //   'subscriptions-transport-ws': true,
      //   'graphql-ws': true,
      // },
    }),
  ],
  providers: [ExampleResolver],
})
export class HttpModule {}
