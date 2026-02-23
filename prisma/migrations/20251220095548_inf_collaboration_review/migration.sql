-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('image', 'video');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "CollaborationStatus" AS ENUM ('requested', 'accepted', 'rejected', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "CompensationType" AS ENUM ('cash', 'barter', 'free_food');

-- CreateTable
CREATE TABLE "influencer_collaborations" (
    "id" BIGSERIAL NOT NULL,
    "vendorId" BIGINT NOT NULL,
    "influencerId" BIGINT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "status" "CollaborationStatus" NOT NULL DEFAULT 'requested',
    "compensationType" "CompensationType",
    "compensationAmount" DECIMAL(10,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "influencer_collaborations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "influencer_reviews" (
    "id" BIGSERIAL NOT NULL,
    "collaborationId" BIGINT NOT NULL,
    "vendorId" BIGINT NOT NULL,
    "influencerId" BIGINT NOT NULL,
    "caption" TEXT,
    "rating" INTEGER,
    "mediaUrl" VARCHAR(255) NOT NULL,
    "mediaType" "MediaType" NOT NULL,
    "moderationStatus" "ReviewStatus" NOT NULL DEFAULT 'pending',
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "influencer_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "influencer_collaborations_vendorId_idx" ON "influencer_collaborations"("vendorId");

-- CreateIndex
CREATE INDEX "influencer_collaborations_influencerId_idx" ON "influencer_collaborations"("influencerId");

-- CreateIndex
CREATE UNIQUE INDEX "influencer_reviews_collaborationId_key" ON "influencer_reviews"("collaborationId");

-- AddForeignKey
ALTER TABLE "influencer_collaborations" ADD CONSTRAINT "influencer_collaborations_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer_collaborations" ADD CONSTRAINT "influencer_collaborations_influencerId_fkey" FOREIGN KEY ("influencerId") REFERENCES "influencers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer_reviews" ADD CONSTRAINT "influencer_reviews_collaborationId_fkey" FOREIGN KEY ("collaborationId") REFERENCES "influencer_collaborations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer_reviews" ADD CONSTRAINT "influencer_reviews_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "influencer_reviews" ADD CONSTRAINT "influencer_reviews_influencerId_fkey" FOREIGN KEY ("influencerId") REFERENCES "influencers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
