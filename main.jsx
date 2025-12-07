import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
// IMPORT THESE TWO LINES
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// CREATE THE CLIENT (The Engine)
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // WRAP THE APP IN THE PROVIDER
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)