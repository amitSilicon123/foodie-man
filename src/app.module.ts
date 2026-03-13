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
//import { GraphQLModule } from '@nestjs/graphql';
//import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//import { AppResolver } from './graphql/app.resolver';
//import { AuthResolver } from './graphql/auth/auth.resolver';
import { GraphqlModule } from './graphql/graphql.module';

//import { join } from 'path';


import { CategoryModule } from './category/category.module';
import { CustomerResolver } from './graphql/customer/customer.resolver';
import { CustomerModule } from './graphql/customer/customer.module';


@Module({
    imports: [
      ConfigModule.forRoot({
      isGlobal: true, // makes env available everywhere
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
      CustomerModule
    ],
  //controllers: [AppController, AuthController],
  controllers: [
    AppController, 
    CustomersController
  ],
  providers: [
  //  AuthModule, 
    AppService, 
    UserService , 
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }, CustomersService, CustomerResolver
  ],
})
export class AppModule {}
