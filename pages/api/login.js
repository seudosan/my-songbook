import { setAuthCookies } from 'next-firebase-auth'
import { initAuth } from 'initAuth'

initAuth()

export default async function (req, res) {
  try {
    await setAuthCookies(req, res)
  } catch (e) {
    return res.status(500).json({ error: 'Error inesperado.' })
  }
  return res.status(200).json({ success: true })
}
