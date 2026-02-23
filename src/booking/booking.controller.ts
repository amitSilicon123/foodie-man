import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';
@Controller('bookings')
export class BookingController {
    constructor(private bookingService: BookingService){}

    @Get()
    async findAll(){
        return await this.bookingService.getCustomerBookings();
    }

    @Get('collaboration')
    async collaboration(){
        return await this.bookingService.getInfluencerBooking();
    }
}
