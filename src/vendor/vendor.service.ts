import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { UserService }  from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { VendorFilterInput } from 'src/graphql/vendor/dto/vendor-filter-input.dto';
import { Decimal } from '@prisma/client/runtime/client';
@Injectable()
export class VendorService {
  constructor(private userService:UserService,
              private prisma:PrismaService
  ){}
  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  findAll() { 
    return this.prisma.user.findMany({
      where : {
        role:'vendor'
      },
      include : {
        vendor : {
          include : {
            vendorDocument: true
          },
        },
      },
      orderBy: {
        createdAt : 'desc'
      }
    });
  }
  getVendorForApproval(){
    return this.prisma.user.findMany({
      where : {
        role:'vendor',
        operationalStatus : 'pending',
        vendor : {
          varified : false,
          vendorDocument : {
            docStatus : 'pending'
          },
        },
      },
      include : {
        vendor : {
          include : {
            vendorDocument: true
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      }
    })
  }


  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
  
  // API frontend content
  getApprovedVendors(args?: VendorFilterInput){
      const {categoryId, rating, minPrice, maxPrice, sortBy} = args ?? {};
         return this.prisma.user.findMany({
        where : {
          role:'vendor',
          accountStatus : 'active',
          operationalStatus : 'active',
          vendor : {
            varified : true,
            vendorDocument : {
              docStatus : 'approved'
            },
            //category filter
            categoryId : categoryId ?? undefined,

            avgRating: rating ? { gte : rating } : undefined,

            // Price range filter
            menu:
            minPrice || maxPrice
            ? {
                some: {
                  isActive: true,
                  price: {
                    gte: minPrice ?? undefined,
                    lte: maxPrice ?? undefined,
                  },
                },
              }
            : undefined 
          },
        },
        include : {
          vendor : true // {
            /*include : {
              menu : true
            }*/ 
        // }
        },
        orderBy: sortBy === 'TOP_RATED' ? {
        vendor : {avgRating : 'desc'}
        } 
        : sortBy === 'BUDGET' ? {
          vendor : { minPrice : 'asc'}
        }
        : {createdAt : 'desc'},
    });
  }
  
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where : {id : id},
      include : {
        vendor : true,
      }
    });
    
  }

  trendingVendor(){
    return this.prisma.influencerReview.findMany({
      where : { moderationStatus : 'approved'},
      
      include : {
        vendor : {
          include : {
            user : true
          }
        },
        influencer: true
      },
    
    })
  }
}
  /*select : {
        vendorId: true, 
        influencerId: true,
        rating: true,
        mediaUrl:true,
        mediaType:true,
      } */