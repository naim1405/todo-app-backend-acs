-- CreateTable
CREATE TABLE "Refresh_Token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "Refresh_Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
