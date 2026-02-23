import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PoliciesGuard } from '../auth/policies.guard';
import { CaslModule } from '../casl/casl.module';
//import { AuthResolver } from '../graphql/auth/auth.resolver';
@Module({
  imports : [CaslModule,UserModule, JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),],
  providers: [AuthService, PoliciesGuard],
  controllers: [AuthController],
  exports: [PoliciesGuard]
})
export class AuthModule {}
