-- CreateTable
CREATE TABLE "CustomerAddress" (
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

    CONSTRAINT "CustomerAddress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
