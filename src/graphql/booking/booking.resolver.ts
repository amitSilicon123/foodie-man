import { Resolver, Query, Args, registerEnumType, Mutation } from '@nestjs/graphql';
import { BookingService } from '../../booking/booking.service'
import { BookingResponse } from './dto/booking-response.dto'
import { Public } from '../../auth/auth.guard';
import { BookingResponseWrapper } from './dto/booking-response-wrapper.dto';
import { BookingStatus } from '../../generated/prisma/client';
import { CreateBookingInput } from './dto/booking-input.dto';

registerEnumType(BookingStatus, {
  name: 'BookingStatus',
});

@Resolver( () => BookingResponseWrapper)
export class BookingResolver {
    constructor(private readonly bookingService: BookingService) { }
    
    /*@Public()
    @Query(() => BookingResponseWrapper)
    async customerBooking(@Args('status') status: BookingStatus, @Args('isEqual') isEqual: boolean): Promise<BookingResponseWrapper> {
        console.log("Hello Booking resolver"); 
        const bookings = await this.bookingService.getCustomerBookingsByStatus(status, isEqual);
        //console.log(JSON.stringify(bookings, null, 2));
        console.log(bookings);
        return {
            success: true,
            message: "booking fetched successfully",
            data: bookings as any
        };
    }*/
    @Public()
    @Query(() => BookingResponseWrapper)
    async customerBooking(
        @Args('status', { type: () => BookingStatus }) status: BookingStatus,
        @Args('isEqual', { type: () => Boolean }) isEqual: boolean,
        ): Promise<BookingResponseWrapper> {
            const bookings = await this.bookingService.getCustomerBookingsByStatus(status, isEqual);
            return {
                success: true,
                message: 'booking fetched successfully',
                data: bookings as any
            };
    }

    @Mutation(() => BookingResponseWrapper)
    async createBooking(
        @Args('input') input : CreateBookingInput,
        ) : Promise<BookingResponseWrapper>{
        return {} as any;
    }
}
