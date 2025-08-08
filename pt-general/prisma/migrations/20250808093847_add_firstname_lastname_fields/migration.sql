/*
  Warnings:

  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- First add columns as nullable
ALTER TABLE "User" ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- Update existing records with default values
UPDATE "User" SET "firstName" = COALESCE("name", 'Unknown'), "lastName" = NULL WHERE "firstName" IS NULL;

-- Make firstName NOT NULL
ALTER TABLE "User" ALTER COLUMN "firstName" SET NOT NULL;
