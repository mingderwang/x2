import { getUser, setUser } from '../../utils/kv'

export const GET = async ({  }) => {
  await setUser();
  return new Response(JSON.stringify([
    await getUser()
  ]))
}
