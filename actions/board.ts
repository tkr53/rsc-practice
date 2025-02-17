"use server"
import { db } from "@/database";
import { boardTable } from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addBoard = async ( userId: number, content: string) => {
  await db.insert(boardTable).values({ content, created_at: new Date().toISOString(), userId });
}

export const getBoards = async () => {
  return await db.select().from(boardTable).orderBy(boardTable.created_at);
}

export const addFavorite = async (id: number, count: number) => {
  await db.update(boardTable).set({ favorite: count }).where(eq(boardTable.id, id));
  revalidatePath("/");
}