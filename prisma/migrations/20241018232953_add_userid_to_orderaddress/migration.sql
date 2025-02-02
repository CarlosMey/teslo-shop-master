/*
  Warnings:

  - Made the column `userId` on table `OrderAddress` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OrderAddress" DROP CONSTRAINT "OrderAddress_userId_fkey";

-- AlterTable
ALTER TABLE "OrderAddress" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderAddress" ADD CONSTRAINT "OrderAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
