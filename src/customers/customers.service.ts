import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
    constructor(private prisma: PrismaService){}

    async findAllCustomers(){
        return await this.prisma.user.findMany({
            where : { role : 'customer' },  
            include: {
                _count: {
                    select : {
                        customerReview : true,
                        booking : true,
                    },
                },
            }
        });


        /*return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            operationalStatus: user.operationalStatus,
            accountStatus: user.accountStatus,
        }))*/
    }



}
