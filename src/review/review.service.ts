import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; 
@Injectable()
export class ReviewService {
    constructor(private prisma:PrismaService){}

    getInfluencerReviews(){
        return this.prisma.influencerReview.findMany({
            include : {
                collaboration : true,
                vendor: {
                    include : {
                        user : true
                    }
                },
                influencer : {
                    include : {
                        user : true
                    }
                }
            }
        });
    }

    getCustomerReviews() {
        return this.prisma.customerReview.findMany({
            include : {
                vendor : {
                    include : {
                        user : true
                    }
                },
                customer : true
            }
        });
    }
}
