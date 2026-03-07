import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomersService } from '../../customers/customers.service'

@Module({
    providers: [CustomersService, CustomerResolver],
    exports: [CustomersService], // 🔥 IMPORTANT if used outside
})
export class CustomerModule {}

