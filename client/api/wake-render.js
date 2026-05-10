const defaultWakeUrl = 'https://tbmi-studio.onrender.com/health'

export default async function handler(req, res) {
  const wakeUrl = process.env.RENDER_HEALTH_URL || defaultWakeUrl

  try {
    const response = await fetch(wakeUrl, {
      method: 'GET',
      headers: {
        'user-agent': 'tbmi-vercel-cron',
      },
      cache: 'no-store',
    })

    const body = await response.text()

    return res.status(response.ok ? 200 : 502).json({
      ok: response.ok,
      wakeUrl,
      status: response.status,
      body,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      wakeUrl,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })
  }
}