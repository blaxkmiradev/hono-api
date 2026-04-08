import { Hono } from 'hono'
import userRoutes from './routes/user.js'
import logger from './middleware/logger.js'

const app = new Hono()

// middleware
app.use('*', logger)

// routes
app.route('/user', userRoutes)

// home
app.get('/', (c) => {
  return c.json({ message: 'API running 🚀' })
})

export default app

// run on Node.js
import { serve } from '@hono/node-server'

serve({
  fetch: app.fetch,
  port: 3000
})
