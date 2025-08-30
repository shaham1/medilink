/*
  Warnings:

  - You are about to drop the column `dateLastVisited` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Patient" DROP COLUMN "dateLastVisited";

-- CreateTable
CREATE TABLE "public"."Visit" (
    "id" SERIAL NOT NULL,
    "patientId" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Visit" ADD CONSTRAINT "Visit_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
