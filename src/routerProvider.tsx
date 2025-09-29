import {Suspense, useState} from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
type RouterProviderProps = {
  children: React.ReactNode
}
const queryConfig = {}
function routeProvider({children}:RouterProviderProps) {
  const [queryClient] = useState(()=>{
    return new QueryClient({
      defaultOptions : queryConfig
    })
  })
  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center">
        <span>Loading.....</span>
      </div>
    }>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Suspense>
  )
}

export default routeProvider