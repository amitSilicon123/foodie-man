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


    async getCustomerById(id: bigint){
        return  this.prisma.user.findUnique({
            where : { id: id},
            select : {
                id: true, 
                name: true, 
                phone: true,
                email: true, 
                customerAddress : {
                    select : {
                        id : true,
                        address : true, 
                        locality : true, 
                        city : true,
                        zipCode : true,
                        isDefault : true,
                    }
                },
            }  
        })
    }
}
