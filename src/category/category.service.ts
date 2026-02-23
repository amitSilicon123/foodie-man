import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService){}

    findAll(status?: boolean) {
        console.log(status);
        return this.prisma.category.findMany({
            where : {
                isActive: status === true ? true : undefined
            }
        });
    }

    create(data:any){
        return this.prisma.category.create({data});
    }
}

