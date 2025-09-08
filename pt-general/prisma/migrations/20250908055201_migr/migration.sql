/*
  Warnings:

  - A unique constraint covering the columns `[publicId]` on the table `GalleryImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GalleryImage_publicId_key" ON "GalleryImage"("publicId");

-- CreateIndex
CREATE INDEX "GalleryImage_userId_createdAt_idx" ON "GalleryImage"("userId", "createdAt");
