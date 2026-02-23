// ...existing code...
/*import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const conn = process.env.DATABASE_URL ?? 'postgresql://postgres:something@localhost:5432/test';
    const pool = new PrismaPg({ connectionString: String(conn) });
    super({ adapter: pool }); // pass a real adapter so runtime/TS are satisfied
  }

  async onModuleInit() {
    await this.$connect();
  }
}*/

// prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';



@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
  //  const conn = process.env.DATABASE_URL;
    const conn = 'postgresql://postgres:ECAGJOWCOEqNzxgUgqkdVQKpNuGDlsvi@tramway.proxy.rlwy.net:20285/railway';
    //  const conn = 'postgresql://postgres:something@localhost:5432/test?schema=public&connection_limit=10';

    const pool = new PrismaPg({
      connectionString: String(conn),
      min: 2,  // persistent minimum connections
      max: 10, // max concurrent connections
    });
    super({ adapter: pool }); // pass a real adapter so runtime/TS are satisfied
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected');
  }
  async onModuleDestroy() {
    await this.$disconnect();
    console.log('✅ Prisma disconnected');
  }
}