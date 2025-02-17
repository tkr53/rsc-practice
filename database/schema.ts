import { relations } from "drizzle-orm";
import { sqliteTable, text, int } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique()
});

export const userRelations = relations(userTable, ({many}) => ({
  boards: many(boardTable)
}))

export const boardTable = sqliteTable("board_table", {
  id: int().primaryKey({ autoIncrement: true }),
  content : text().notNull(),
  favorite : int().notNull().default(0),
  created_at: text().notNull(),
  userId: int().notNull()
});

export const boardRelations = relations(boardTable, ({one}) => ({
  user: one(userTable, {
    fields: [boardTable.userId],
    references: [userTable.id]
  })
}))