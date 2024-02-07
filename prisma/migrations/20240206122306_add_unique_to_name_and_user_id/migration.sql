/*
  Warnings:

  - You are about to drop the column `shareURL` on the `Form` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,userId]` on the table `Form` will be added. If there are existing duplicate values, this will fail.
  - The required column `shareUUID` was added to the `Form` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "shareURL",
ADD COLUMN     "shareUUID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Form_name_userId_key" ON "Form"("name", "userId");
