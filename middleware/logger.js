export default async (c, next) => {
  console.log(`${c.req.method} ${c.req.url}`)
  await next()
}
