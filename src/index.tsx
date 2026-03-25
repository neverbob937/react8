import ReactDOM from 'react-dom/client';
import App from './App';
import CitiesProvider from './app/providers/CitiesProvider';
import PanelsProvider from './app/providers/PanelsProvider';
import EditFormProvider from './app/providers/EditFormProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <CitiesProvider>
    <PanelsProvider>
      <EditFormProvider>
        <App />
      </EditFormProvider>
    </PanelsProvider>
  </CitiesProvider>
);