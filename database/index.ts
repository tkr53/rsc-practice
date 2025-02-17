import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

if (!process.env.DB_FILE_NAME) {
  throw new Error('DB_FILE_NAME is not defined in the environment variables');
}
export const db = drizzle(process.env.DB_FILE_NAME);