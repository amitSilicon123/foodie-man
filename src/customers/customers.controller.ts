import { Controller, Get, Post, Body, Request, Param, UseGuards } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { ViewRequestPolicy } from './policies/view-request.policy';
import { PoliciesGuard } from '../auth/policies.guard';
import { CheckPolicies } from '../casl/check-policies.decorator';

@Controller('customers')
@UseGuards(PoliciesGuard)
export class CustomersController {
    constructor(private customerService: CustomersService){}

    @Get()
     @CheckPolicies(new ViewRequestPolicy()) // ✅ THIS IS REQUIRED
    async findAll(){
        return await this.customerService.findAllCustomers();
    }
}
