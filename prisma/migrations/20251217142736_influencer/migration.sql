-- CreateEnum
CREATE TYPE "VarificationSource" AS ENUM ('instagram', 'youtube', 'facebook');

-- CreateTable
CREATE TABLE "influencers" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "followersCount" INTEGER NOT NULL DEFAULT 0,
    "socialProfileUrl" VARCHAR(255) NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verificationSource" "VarificationSource",
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "influencers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "influencers_userId_key" ON "influencers"("userId");

-- AddForeignKey
ALTER TABLE "influencers" ADD CONSTRAINT "influencers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
