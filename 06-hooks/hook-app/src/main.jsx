import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp.jsx'
import './index.css'
import CounterApp from './01-useState/CounterApp.jsx'
import { CounterCustomHook } from './01-useState/CounterCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustom } from './02-useEffect/FormWithCustom.jsx'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx'
import { Layout } from './05-useLayoutEffect/Layout.jsx'
import { Memorize } from './06-MEMOS/Memorize.jsx'
import { MemoHook } from './06-MEMOS/memoHook.jsx'
import { CallBackHook } from './06-MEMOS/CallBackHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Padre/>
  </StrictMode>,
)
