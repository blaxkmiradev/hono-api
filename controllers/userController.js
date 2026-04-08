export const getUser = (c) => {
  return c.json({
    id: 1,
    name: 'Mira',
    status: 'active'
  })
}

export const createUser = async (c) => {
  const body = await c.req.json()

  return c.json({
    message: 'User created ✅',
    data: body
  })
}
