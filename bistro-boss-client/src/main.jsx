import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { Router } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
