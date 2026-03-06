import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookingStatus } from '../generated/prisma/client';
import { CreateBookingInput } from '../graphql/booking/dto/booking-input.dto';
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

    async generateUniqueBookingCode(): Promise<string> {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        while (true) {
            let code = 'BK-';

            for (let i = 0; i < 8; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            const existing = await this.prisma.booking.findUnique({
            where: { bookingCode: code }
            });

            if (!existing) return code;
        }
    }
    
    generateBookingCode(): string {
        return `BK-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    async createBooking(input : CreateBookingInput){
        const bookingCode = this.generateBookingCode();
        return this.prisma.booking.create({
            data: {
                bookingCode: bookingCode, // 👈 required field
                vendorId: input.vendorId,
                customerId: input.customerId,
                eventDate: new Date(input.eventDate),
                serviceDate: new Date(input.eventDate),
                guestCount: input.guestCount,
                location: input.location,
                description: input.description,
                paidAmount: input.paidAmount,
                fullAmount: input.fullAmount,
                // paymentOption: input.paymentOption,
            },
            select : {
                bookingCode: true,
                eventDate: true,  
                guestCount: true,  
                location: true, 
                paidAmount: true, 
                fullAmount: true,
                paymentOption: true,
                vendor : {
                    select : {
                        shopName : true,
                        user : {
                            select : {
                                name : true,
                                phone : true
                            }
                        }
                    }
                }
            }
        })
    }




}
