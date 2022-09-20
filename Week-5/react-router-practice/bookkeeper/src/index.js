import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/invoices' element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=':invoiceId' element={<Invoice></Invoice>}></Route>
          </Route>
          <Route path='/expenses' element={<Expenses />}></Route>
          <Route path='*' element={<main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


