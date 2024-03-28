
import { publicProcedure, router } from './trpc'

export const appRouter = router({
  anyApiRoute: publicProcedure.query(()=>{
    return  5
  })
})

export type AppRouter = typeof appRouter
