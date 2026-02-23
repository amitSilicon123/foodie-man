import { Resolver, Query } from '@nestjs/graphql';
import { Public } from '../../auth/auth.guard';
import { InfluencerService } from 'src/influencer/influencer.service';
import { InfluencerResponse } from './dto/influencer-response.dto'
import { InfluencerResponseWrapper } from './dto/influencer-response-wrapper.dto'
@Resolver( () => InfluencerResponse)
export class InfluencerResolver {
    constructor(private readonly influencerService:InfluencerService){}

    @Public()
    @Query( () => InfluencerResponseWrapper)
    async influencers(): Promise<InfluencerResponseWrapper>{
        const influencers = await this.influencerService.getApprovedInfluencers();
        return {
            success : true,
            message : "Influencer fetched successfully",
            data : influencers as any
        }
    }

    



}
