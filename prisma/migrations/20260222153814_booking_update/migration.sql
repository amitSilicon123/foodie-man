/*
  Warnings:

  - You are about to drop the column `advancePaid` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledAt` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `trackingCode` on the `bookings` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentOption" AS ENUM ('advance', 'full', 'cash_after_service');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PaymentStatus" ADD VALUE 'partial';
ALTER TYPE "PaymentStatus" ADD VALUE 'refunded';
ALTER TYPE "PaymentStatus" ADD VALUE 'cancelled';
ALTER TYPE "PaymentStatus" ADD VALUE 'expired';

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "advancePaid",
DROP COLUMN "amount",
DROP COLUMN "scheduledAt",
DROP COLUMN "serviceType",
DROP COLUMN "trackingCode",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fullAmount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "guestCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "location" VARCHAR(255) NOT NULL DEFAULT 'NA',
ADD COLUMN     "paidAmount" DECIMAL(10,2) DEFAULT 0,
ADD COLUMN     "paymentOption" "PaymentOption" NOT NULL DEFAULT 'advance';
