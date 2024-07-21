import { createClient } from "@vercel/kv";

// env.local
const KV_REST_API_URL = import.meta.env.KV_REST_API_URL;
const KV_REST_API_READ_ONLY_TOKEN = import.meta.env.KV_REST_API_READ_ONLY_TOKEN;
const KV_REST_API_TOKEN = import.meta.env.KV_REST_API_TOKEN;

const kv = createClient({
  url: KV_REST_API_URL,
  token: KV_REST_API_TOKEN,
});

export async function getUser() {
  try {
    const getExample = (await kv.get("key")) as string;
    console.log(getExample);
    return getExample;
  } catch (error) {
    console.error(error);
  }
}

export async function setUser() {
  try {
    const res2 = await kv.hget("bike:2", "model");
    console.log(res2); // 'Deimos'

 //   await kv.set("setExample", "123abc", { ex: 100, nx: true });
  } catch (error) {
    console.error(error);
  }
}
