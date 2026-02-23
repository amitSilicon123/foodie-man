import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './review.service';
@Controller('reviews')
export class ReviewController {
    constructor(private review:ReviewService){}
    @Get()
    async findAll(){
        return this.review.getInfluencerReviews();
    }

    @Get('customers')
    async getCustomerReviews(){
        return this.review.getCustomerReviews();
    }

}
