-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('active', 'blocked');

-- CreateEnum
CREATE TYPE "OperationalStatus" AS ENUM ('pending', 'active', 'inactive');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountStatus" "AccountStatus" NOT NULL DEFAULT 'active',
ADD COLUMN     "operationalStatus" "OperationalStatus" NOT NULL DEFAULT 'pending';
