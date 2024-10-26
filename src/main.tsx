import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { persistedStore, store } from "redux/store";
// import { App } from "components/App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistedStore}>
//         <BrowserRouter>
//           <HelmetProvider>
//             <App />
//           </HelmetProvider>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );