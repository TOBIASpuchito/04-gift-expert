import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './gift-expert-app'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>,
)
