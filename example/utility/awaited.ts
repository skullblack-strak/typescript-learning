//!================================================
//!================ Awaited<Type> =================
//!================================================

type A = Awaited<Promise<string>>
type B = Awaited<Promise<Promise<number>>>
type C = Awaited<boolean | Promise<number>>

async function getUser(): Promise<{
  id: number
  name: string
}> {
  return { id: 1, name: 'John Doe' }
}

type User = Awaited<ReturnType<typeof getUser>>

async function printUser(): Promise<void> {
  const user: User = await getUser()
  console.log(user)
}
