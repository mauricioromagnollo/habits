-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DAY_HABITS" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    CONSTRAINT "DAY_HABITS_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "DAYS" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DAY_HABITS_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "HABITS" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DAY_HABITS" ("day_id", "habit_id", "id") SELECT "day_id", "habit_id", "id" FROM "DAY_HABITS";
DROP TABLE "DAY_HABITS";
ALTER TABLE "new_DAY_HABITS" RENAME TO "DAY_HABITS";
CREATE UNIQUE INDEX "DAY_HABITS_day_id_habit_id_key" ON "DAY_HABITS"("day_id", "habit_id");
CREATE TABLE "new_HABIT_WEEK_DAYS" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "HABIT_WEEK_DAYS_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "HABITS" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HABIT_WEEK_DAYS" ("habit_id", "id", "week_day") SELECT "habit_id", "id", "week_day" FROM "HABIT_WEEK_DAYS";
DROP TABLE "HABIT_WEEK_DAYS";
ALTER TABLE "new_HABIT_WEEK_DAYS" RENAME TO "HABIT_WEEK_DAYS";
CREATE UNIQUE INDEX "HABIT_WEEK_DAYS_habit_id_week_day_key" ON "HABIT_WEEK_DAYS"("habit_id", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
