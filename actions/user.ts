import { db } from "@/database";
import { userTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export const addUser = async (name: string, age: number, email: string) => {
  await db.insert(userTable).values({ name, age, email })
}

export const getUsers = async () => {
  return await db.select().from(userTable)
}

export const getUser = async (id: number) => {
  return await db.select().from(userTable).where(eq(userTable.id, id))
}

export const updateUser = async (id: number, name: string, age: number, email: string) => {
  await db.update(userTable).set({ name, age, email }).where(eq(userTable.id, id))
}

export const deleteUser = async (id: number) => {
  await db.delete(userTable).where(eq(userTable.id, id))
}