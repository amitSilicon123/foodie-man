-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "menus_vendorId_idx" ON "menus"("vendorId");

-- CreateIndex
CREATE INDEX "menus_price_idx" ON "menus"("price");
