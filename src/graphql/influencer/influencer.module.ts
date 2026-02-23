import { Module } from '@nestjs/common';
import { InfluencerResolver } from './influencer.resolver';
import { InfluencerService } from '../../influencer/influencer.service';

@Module({
  providers: [InfluencerService, InfluencerResolver],
  exports: [InfluencerService], // 🔥 IMPORTANT if used outside
})
export class InfluencerModule {}
