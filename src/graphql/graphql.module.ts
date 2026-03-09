// graphql.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { BookingModule } from './booking/booking.module';
import { VendorModule } from './vendor/vendor.module';
import { InfluencerModule } from './influencer/influencer.module';
import { BookingModule } from './booking/booking.module';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';
import {
  ApolloServerPluginLandingPageLocalDefault,
} from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      debug: true,
      introspection: true,

      // ✅ Important for AuthGuard
      context: ({ req }) => ({ req }),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          footer: false,
        }),
      ],
      /*formatError: (error) => {
        const message = error.message;

        // extract field name
        const fieldMatch = message.match(/input\.(\w+)/);
        const field = fieldMatch ? fieldMatch[1] : null;

        // remove GraphQL variable prefix
        const cleanMessage = message.includes(';')
          ? message.split(';')[1].trim()
          : message;

        return {
          field,
          message: cleanMessage,
          code: error.extensions?.code,
        };
      }  */ 
      /*formatError: (error) => ({
        message: error.message,
        code: error.extensions?.code,
        path : error.path,
      }), */
    }),
  AuthModule, VendorModule, InfluencerModule, BookingModule, CategoryModule],
})
export class GraphqlModule {}
