-- CreateTable
CREATE TABLE "public"."Patient" (
    "id" TEXT NOT NULL,
    "cardNumber" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "dateLastVisited" TIMESTAMP(3) NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
