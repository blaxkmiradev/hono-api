import { Hono } from 'hono'

const app = new Hono()

// Home
app.get('/', (c) => {
  return c.json({ message: 'Hono API running 🚀' })
})

// GET
app.get('/user', (c) => {
  return c.json({
    id: 1,
    name: 'Mira',
    status: 'active'
  })
})

// POST
app.post('/user', async (c) => {
  const body = await c.req.json()
  return c.json({
    message: 'User created',
    data: body
  })
})

export default app
