/*
  Warnings:

  - You are about to drop the column `priceTotal` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `bookings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookingCode]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingCode` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceType` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('aadhaar', 'pan', 'fssai');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'pending', 'failed');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('request', 'accepted', 'declined', 'completed', 'cancelled', 'refunded');

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "priceTotal",
DROP COLUMN "qty",
DROP COLUMN "status",
ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "bookingCode" VARCHAR(64) NOT NULL,
ADD COLUMN     "bookingStatus" "BookingStatus" NOT NULL DEFAULT 'request',
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "serviceDate" TIMESTAMP(3),
ADD COLUMN     "serviceType" VARCHAR(64) NOT NULL,
ALTER COLUMN "advancePaid" DROP NOT NULL;

-- CreateTable
CREATE TABLE "vendor_documents" (
    "id" BIGSERIAL NOT NULL,
    "vendorId" BIGINT NOT NULL,
    "docType" "DocumentType" NOT NULL,
    "docNumber" VARCHAR(100) NOT NULL,
    "docUrl" VARCHAR(255) NOT NULL,
    "docStatus" "DocumentStatus" NOT NULL DEFAULT 'pending',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "varifiedAt" TIMESTAMP(3),

    CONSTRAINT "vendor_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_reviews" (
    "id" BIGSERIAL NOT NULL,
    "customerId" BIGINT NOT NULL,
    "vendorId" BIGINT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vendor_documents_vendorId_key" ON "vendor_documents"("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_bookingCode_key" ON "bookings"("bookingCode");

-- AddForeignKey
ALTER TABLE "vendor_documents" ADD CONSTRAINT "vendor_documents_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_reviews" ADD CONSTRAINT "customer_reviews_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_reviews" ADD CONSTRAINT "customer_reviews_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
