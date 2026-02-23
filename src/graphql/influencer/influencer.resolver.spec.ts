import { Test, TestingModule } from '@nestjs/testing';
import { InfluencerResolver } from './influencer.resolver';

describe('InfluencerResolver', () => {
  let resolver: InfluencerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfluencerResolver],
    }).compile();

    resolver = module.get<InfluencerResolver>(InfluencerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
