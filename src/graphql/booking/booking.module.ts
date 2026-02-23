import { Module } from '@nestjs/common';
import { BookingResolver } from './booking.resolver';
import { BookingService } from '../../booking/booking.service'
@Module({
  providers: [BookingService, BookingResolver],
   exports: [BookingService], // 🔥 IMPORTANT if used outside
})
export class BookingModule {}
