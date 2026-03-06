import { Resolver, Query, Args, registerEnumType, Mutation } from '@nestjs/graphql';
import { BookingService } from '../../booking/booking.service'
import { BookingResponse } from './dto/booking-response.dto'

import { BookingResponseWrapper, CustomerBookingResponseWrapper } from './dto/booking-response-wrapper.dto';
import { BookingStatus } from '../../generated/prisma/client';
import { CreateBookingInput } from './dto/booking-input.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard, Public } from '../../auth/auth.guard';

registerEnumType(BookingStatus, {
  name: 'BookingStatus',
});

@Resolver( () => BookingResponseWrapper)

export class BookingResolver {
    constructor(private readonly bookingService: BookingService) { }
    
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

  
    @Mutation(() => CustomerBookingResponseWrapper)
    @UseGuards(AuthGuard)
    async createBooking(
        @Args('input') input : CreateBookingInput,
        ) : Promise<CustomerBookingResponseWrapper>{

        const booking = await this.bookingService.createBooking(input);
        return {
            success: true,
            message: 'booking created successfully',
            data: booking as any
        };
    
    }
}
