import { Hono } from 'hono'
import { getUser, createUser } from '../controllers/userController.js'

const app = new Hono()

app.get('/', getUser)
app.post('/', createUser)

export default app
