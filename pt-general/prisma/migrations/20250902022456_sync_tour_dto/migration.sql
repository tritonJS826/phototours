/*
  Warnings:

  - You are about to drop the column `region` on the `Tour` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Tour` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "region",
ADD COLUMN     "availableMonths" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "coverUrl" TEXT,
ADD COLUMN     "durationDays" INTEGER,
ADD COLUMN     "endLocation" TEXT,
ADD COLUMN     "languages" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "minAge" INTEGER,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "startLocation" TEXT,
ALTER COLUMN "price" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tour_slug_key" ON "Tour"("slug");
