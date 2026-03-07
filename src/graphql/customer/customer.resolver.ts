import { Resolver, Query, Args, registerEnumType, Mutation, Context  } from '@nestjs/graphql';
import { CustomersService } from '../../customers/customers.service'

import { CustomerResponseWrapper} from './dto/customer-response-wrapper.dto';


import { UseGuards } from '@nestjs/common';
import { AuthGuard, Public } from '../../auth/auth.guard';



@Resolver()
export class CustomerResolver {
    constructor(private customerService: CustomersService ){}

    @Query( () => CustomerResponseWrapper)
    async customerDetails(@Context() context): Promise<CustomerResponseWrapper>{
        const user = context.req.user;
        const customer = await this.customerService.getCustomerById(user.sub);   
        return {
            success: true, 
            message: "Customer Details",
            data : customer as any
        }
    }


}
