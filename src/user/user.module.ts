import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserController } from './user.controller';

@Module({
    imports: [PrismaModule], // <-- make PrismaService available
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
