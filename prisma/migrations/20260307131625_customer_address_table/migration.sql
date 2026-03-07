/*
  Warnings:

  - You are about to drop the `CustomerAddress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomerAddress" DROP CONSTRAINT "CustomerAddress_customerId_fkey";

-- DropTable
DROP TABLE "CustomerAddress";

-- CreateTable
CREATE TABLE "customer_addresses" (
    "id" SERIAL NOT NULL,
    "customerId" BIGINT NOT NULL,
    "address" TEXT NOT NULL,
    "locality" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "zipCode" VARCHAR(20) NOT NULL,
    "state" VARCHAR(50),
    "country" VARCHAR(50),
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_addresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
