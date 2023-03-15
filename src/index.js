import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styled/GlobalStyled';
import ResetStyled from './styled/ResetStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyled />
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
