-- CreateTable
CREATE TABLE "DAYS" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DAYS_date_key" ON "DAYS"("date");
