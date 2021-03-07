import db from 'db'

export default async function apiMerchants (req, res) {
  switch (req.method) {
    case 'GET': {
      const { rows } = await db.query('SELECT * FROM merchants ORDER BY name')
      return res.status(200).json({ merchants: rows })
    }
    default:
      res.setHeader('Allow', 'GET')
      return res.status(405).send()
  }
}
