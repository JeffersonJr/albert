import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle chunk load errors (common on new deployments)
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && (
    event.reason.name === 'ChunkLoadError' ||
    /failed to fetch/i.test(event.reason.message) ||
    /dynamically imported module/i.test(event.reason.message)
  )) {
    console.error('Critical chunk failed to load. Recovering...', event.reason);

    // Prevent infinite loop with session storage
    const lastChunkReload = sessionStorage.getItem('last_chunk_reload');
    const now = Date.now();

    if (!lastChunkReload || (now - parseInt(lastChunkReload)) > 10000) {
      sessionStorage.setItem('last_chunk_reload', now.toString());
      window.location.reload(true);
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
