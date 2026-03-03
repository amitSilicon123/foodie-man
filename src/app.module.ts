import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { VendorModule } from './vendor/vendor.module';
import { BookingModule } from './booking/booking.module';
import { InfluencerModule } from './influencer/influencer.module';
import { ReviewModule } from './review/review.module';
import { CaslModule } from './casl/casl.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//import { AppResolver } from './graphql/app.resolver';
import { AuthResolver } from './graphql/auth/auth.resolver';
import { GraphqlModule } from './graphql/graphql.module';

import { join } from 'path';

import {
  ApolloServerPluginLandingPageLocalDefault,
} from '@apollo/server/plugin/landingPage/default';
import { CategoryModule } from './category/category.module';

@Module({
    imports: [GraphqlModule,
    AuthModule, UserModule, PrismaModule, VendorModule, BookingModule, InfluencerModule, ReviewModule, CaslModule
  ,
   // ✅ LOAD ENV VARIABLES (MOST IMPORTANT)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
       autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // generates schema automatically
      playground: false, // for testing
      debug: true,
      // ✅ REQUIRED
      introspection: true,
     //  sandbox: true,     // enable Apollo Sandbox

     // introspection: true, // required for UI
     plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          footer: false,
        }),
      ],
      
      context: ({ req }) => ({ req }), // ✅ important for AuthGuard
      /*formatError: (error) => {
        const code = error.extensions?.code;

        if (code === 'GRAPHQL_VALIDATION_FAILED') {
          return {
            success: false,
            message: 'Invalid request',
            code: 'VALIDATION_ERROR',
          };
        }

        return {
          success: false,
          message: 'Internal server errordd',
          code: 'INTERNAL_SERVER_ERROR',
        };
      },*/
    }),
      CategoryModule],
  //controllers: [AppController, AuthController],
  controllers: [AppController, CustomersController],
  providers: [AuthModule, AppService, UserService , {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }, CustomersService],
})
export class AppModule {}
