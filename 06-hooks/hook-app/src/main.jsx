import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'
import './index.css'
import CounterApp from './01-useState/CounterApp.jsx'
import { CounterCustomHook } from './01-useState/CounterCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustom } from './02-useEffect/FormWithCustom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithCustom />
  </StrictMode>,
)
