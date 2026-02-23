// graphql.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
//import { BookingModule } from './booking/booking.module';
import { VendorModule } from './vendor/vendor.module';
import { InfluencerModule } from './influencer/influencer.module';
import { BookingModule } from './booking/booking.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [AuthModule, VendorModule, InfluencerModule, BookingModule, CategoryModule],
})
export class GraphqlModule {}
