import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// read from .env.local
const DATABASE_URL = import.meta.env.DATABASE_URL;

// Bun automatically loads the DATABASE_URL from .env.local
// Refer to: https://bun.sh/docs/runtime/env for more information
const sql = neon(DATABASE_URL!);
console.log(process.env.DATABASE_URL)
export const db = drizzle(sql);
