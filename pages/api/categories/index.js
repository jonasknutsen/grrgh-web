import db from 'db'

export default async function apiCategories (req, res) {
  switch (req.method) {
    case 'GET': {
      const { rows } = await db.query('SELECT * FROM categories ORDER BY name')
      return res.status(200).json({ categories: rows })
    }
    default:
      res.setHeader('Allow', 'GET')
      return res.status(405).send()
  }
}
