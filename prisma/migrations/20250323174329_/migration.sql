-- CreateTable
CREATE TABLE "Refresh_Token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Refresh_Token_pkey" PRIMARY KEY ("id")
);
