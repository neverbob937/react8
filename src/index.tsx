import ReactDOM from 'react-dom/client';
import App from './App';
import CatsProvider from './app/providers/CatsProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CatsProvider>
    <App />
  </CatsProvider>
);
