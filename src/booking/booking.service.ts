import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookingStatus } from '../generated/prisma/client';

@Injectable()
export class BookingService {
    constructor(private prisma:PrismaService){}
    private safeUserSelect = {
    id: true,
    name: true,
    phone: true,
    email: true,
    role: true,
    createdAt: true,
    updatedAt: true,
    accountStatus: true,
    operationalStatus: true
    };

    getCustomerBookings(){
        return this.prisma.booking.findMany({
            include : {
                vendor : true, 
                user : true
            }
        })
    }

    getInfluencerBooking(){
        return this.prisma.influencerCollaboration.findMany({
            include : {
                vendor : {
                    include : {
                        user : true
                    }
                },
                influencer : {
                    include : {
                        user : true
                    }
                },
                influencerReview : {
                    select : {
                        id : true,
                        moderationStatus : true
                    }
                }
            }
        });
    }

    // api for app developers
    getCustomerBookingsByStatus(status: BookingStatus, isEqual : boolean){
        return this.prisma.booking.findMany({
            where : {
                bookingStatus : isEqual ? status : { not: status }
            },
            include : {
                user : {select : this.safeUserSelect},
                vendor: {
                    include : {
                        user : {select : this.safeUserSelect}
                    }
                }
            }
        })
    }

}
