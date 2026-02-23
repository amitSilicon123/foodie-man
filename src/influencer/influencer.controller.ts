import { Controller, Get } from '@nestjs/common';
import { InfluencerService } from './influencer.service';

@Controller('influencers')
export class InfluencerController {
    constructor(private influencerService : InfluencerService){}

    @Get()
    async findAll(){
        return await this.influencerService.getInfluencers();
    }
}
