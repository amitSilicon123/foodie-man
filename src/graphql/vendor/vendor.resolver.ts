import { Resolver, Query, Args, ID, Int, Float } from '@nestjs/graphql';
import { VendorService } from '../../vendor/vendor.service';
import { Public } from '../../auth/auth.guard';
//import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { VendorResponseWrapper, SingleVendorResponse, TrendingVendorResponseWrapper } from './dto/vendor-response-wrapper.dto';
import { VendorResponse } from './dto/vendor-response.dto';
import { VendorFilterInput } from './dto/vendor-filter-input.dto';
@Resolver(() => VendorResponse) 
export class VendorResolver {

    constructor(private vendorService: VendorService){}

    /*@Public()
    @Query(() => VendorResponseWrapper)
    async vendors(): Promise<VendorResponseWrapper> {
        const vendors = await this.vendorService.getApprovedVendors();
        return {
            success: true,
            message: 'Vendors fetched successfully',
            data:  vendors as any,
        }
    } */
   
    @Public()
    @Query(() => VendorResponseWrapper)
    async vendors(@Args('categoryId', { type: () => Int, nullable: true }) categoryId?: number,
            @Args('rating', { type: () => Float, nullable: true }) rating?: number,
            @Args('minPrice', { type: () => Float, nullable: true }) minPrice?: number,
            @Args('maxPrice', { type: () => Float, nullable: true }) maxPrice?: number,
            @Args('sortBy', { type: () => String, nullable: true }) sortBy?: string
        ): Promise<VendorResponseWrapper> {

        const args: VendorFilterInput = {
            categoryId, 
            rating, 
            minPrice,
            maxPrice,
            sortBy
        }
        

        const vendors = await this.vendorService.getApprovedVendors( args );
        return {
            success: true,
            message: 'Vendors fetched successfully',
            data: vendors as any 
        };
  }
    

    @Public()
    @Query(() => SingleVendorResponse)
    async vendorDetail(
        @Args('id' , { type : () => ID}) id: number
    ): Promise<SingleVendorResponse>{
        console.log(id);
        const vendor_detail = await this.vendorService.findOne(id);
         console.log(vendor_detail);
        return {
            success: true, 
            message: 'Vendor Detail fetched successfully',
            //data : vendor_detail ? [vendor_detail] : [] as any
            data : vendor_detail as any
        }
    }

    @Public()
    @Query(() => TrendingVendorResponseWrapper)
    async trendingVendor() : Promise<TrendingVendorResponseWrapper> {
        const trending_vendors = await this.vendorService.trendingVendor();
       // console.log(trending_vendors);
        return {
            success: true,
            message: 'Trending Vendor fetched successfully',
            data : trending_vendors as any
        }
    }


}
