import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver } from '@nestjs/mercurius';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { VendorModule } from './vendor/vendor.module';
import { BookingModule } from './booking/booking.module';
import { InfluencerModule } from './influencer/influencer.module';
import { ReviewModule } from './review/review.module';
import { CaslModule } from './casl/casl.module';
import { CategoryModule } from './category/category.module';

import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { AuthGuard } from './auth/auth.guard';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    // ✅ Load ENV
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // ✅ GraphQL with Mercurius
    GraphQLModule.forRoot({
      driver: MercuriusDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: true,      // enable GraphiQL UI
      path: '/graphql',
      context: (req) => ({ req }), // important for AuthGuard
    }),

    GraphqlModule,
    AuthModule,
    UserModule,
    PrismaModule,
    VendorModule,
    BookingModule,
    InfluencerModule,
    ReviewModule,
    CaslModule,
    CategoryModule,
  ],

  controllers: [AppController, CustomersController],

  providers: [
    AppService,
    CustomersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}