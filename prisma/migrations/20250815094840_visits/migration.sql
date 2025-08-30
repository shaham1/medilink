/*
  Warnings:

  - Added the required column `dateLastVisited` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Patient" ADD COLUMN     "dateLastVisited" TIMESTAMP(3) NOT NULL;
