import { Module } from '@nestjs/common';
import { VendorService } from '../../vendor/vendor.service';
import { VendorResolver } from './vendor.resolver';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
 // import : [UserModule],
 imports: [
    UserModule,      // ✅ NOW UserService is visible
    PrismaModule,
  ],
  providers: [VendorService, VendorResolver],
  exports: [VendorService], // optional if reused elsewh
})
export class VendorModule {}
