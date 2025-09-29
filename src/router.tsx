import { createBrowserRouter, RouterProvider } from "react-router";
import { useQueryClient, QueryClient } from "@tanstack/react-query";

const convert =(client: QueryClient)=>(m: any)=>{
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(client),
    action: clientAction?.(client),
    Component,
  };
}
const createRoute = (client:QueryClient) =>{
  return createBrowserRouter([
    {
      lazy: ()=> import('@/layout/Layout').then(convert(client)),
      children:[
        {
          path: '/',
          lazy: ()=> import('@/pages/home').then(convert(client)),
        },
        {
          path: '/pageOne',
          lazy: ()=> import('@/pages/pageOne').then(convert(client)),
        },
        {
          path: '/pageTwo',
          lazy: ()=> import('@/pages/pageTwo').then(convert(client)),
        },
      ]
    }
  ])
}

export const AppRouter = ()=>{
  const client = useQueryClient()
  const router = createRoute(client)
  return <RouterProvider router={router}  />
}