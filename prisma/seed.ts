import "dotenv/config";
import argon2 from "argon2";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

// ✅ same connection config, NO Nest service
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });


async function main() {
 

  console.log("Start seeding...");

  await prisma.vendor.deleteMany();
  await prisma.user.deleteMany();
  const hashedPassword = await argon2.hash("something");

  
  const user = await prisma.user.create({
    data: {
      name: Math.random().toString(36).substring(2, 2 + 6),
      phone: "9" + Math.floor(100000000 + Math.random() * 900000000),
      email: `${this.randomString(10)}@example.com`,
      password: hashedPassword,
      role: "vendor",
      vendor: {
        create: {
          shopName: "Alice Store",
          description: "Best food corner",
          categoryId: 1,
          lat: 28.61,
          lng: 77.23,
          address: "Delhi",
        },
      },
    },
    include: {
      vendor: true,
    },
  });

  console.log("Seed finished:", user.id);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
