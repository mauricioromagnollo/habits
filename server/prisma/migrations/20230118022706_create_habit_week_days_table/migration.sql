-- CreateTable
CREATE TABLE "HABIT_WEEK_DAYS" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HABIT_WEEK_DAYS_habit_id_week_day_key" ON "HABIT_WEEK_DAYS"("habit_id", "week_day");
