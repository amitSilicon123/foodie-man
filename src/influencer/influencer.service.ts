import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InfluencerService {
    constructor(private prisma: PrismaService){}
    
    getInfluencers(){
           return this.prisma.user.findMany({
                where : {role : 'influencer'},
                include : {
                    influencer : true,
                },
           }) 
    }

     getApprovedInfluencers(){
      return this.prisma.user.findMany({
      where : {
        role:'influencer',
        accountStatus : 'active',
        operationalStatus : 'active',
        influencer : {
          verified : true,
        },
      },
      include : {
        influencer : true
      },
      orderBy: {
        createdAt: 'asc',
      }
    })
  }

}
