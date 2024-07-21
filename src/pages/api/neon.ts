import { db } from "../../utils/db";
import { sql } from "drizzle-orm";

export const GET = async ({}) => {
  const query = sql`select 'hello world' as text`;
  const result = await db.execute(query);
  console.log(result.rows);
  return new Response(JSON.stringify(result));
};
