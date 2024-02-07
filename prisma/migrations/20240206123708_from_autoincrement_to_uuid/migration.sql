/*
  Warnings:

  - The primary key for the `Form` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FormSubmissions` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "FormSubmissions" DROP CONSTRAINT "FormSubmissions_formId_fkey";

-- AlterTable
ALTER TABLE "Form" DROP CONSTRAINT "Form_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Form_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Form_id_seq";

-- AlterTable
ALTER TABLE "FormSubmissions" DROP CONSTRAINT "FormSubmissions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "formId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FormSubmissions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FormSubmissions_id_seq";

-- AddForeignKey
ALTER TABLE "FormSubmissions" ADD CONSTRAINT "FormSubmissions_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
