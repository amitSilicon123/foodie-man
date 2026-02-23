import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    // ⏱ DB timing
    const t1 = Date.now();
    const user = await this.userService.findOne(email);
    console.log('DB:', Date.now() - t1, 'ms');

    if (!user) {
      return null;
    }

    // ⏱ Password verify timing (FAST)
    const t2 = Date.now();
    const isPasswordValid = await argon2.verify(user.password, password);
    console.log('Argon2:', Date.now() - t2, 'ms');

    if (!isPasswordValid) {
      return null;
    }

    // ✅ Minimal JWT payload (FAST)
    const payload = {
      sub: user.id.toString(),
      username: user.name,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
