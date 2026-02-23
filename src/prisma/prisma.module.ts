import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // optional: make it globally available
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // important: export so other modules can use it
})
export class PrismaModule {}
