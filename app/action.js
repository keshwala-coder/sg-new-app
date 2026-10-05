'use server'

import { cookies } from 'next/headers'

export async function createCookies(data) {
    cookies().set('pNumber', data)
}

export async function getPNumCookies() {
    const cookieStore = await cookies()
  const theme = await cookieStore.get('pNumber');
  return theme.value;
}