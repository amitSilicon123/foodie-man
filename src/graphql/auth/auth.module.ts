import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from '../../auth/auth.service'; // shared service
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    ConfigModule, UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET') || 'default_secret',
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [
    AuthResolver,
    AuthService, // shared service
  ],
  exports: [
    AuthService, //   export if other GraphQL modules need it
  ],
})
export class AuthModule {}



