-- CreateTable
CREATE TABLE "DAY_HABITS" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DAY_HABITS_day_id_habit_id_key" ON "DAY_HABITS"("day_id", "habit_id");
