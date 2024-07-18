import { createClient } from '@vercel/kv';

const kv = createClient({
  url: 'https://<hostname>.redis.vercel-storage.com',
  token: '<token>',
});

await kv.set('key', 'value');
let data = await kv.get('key');
console.log(data); // 'value'


export const GET = async ({  }) => {
  return new Response(JSON.stringify([
    'Buy the milk', 
    'Write a blog post'
  ]))
}
