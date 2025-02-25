import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'
import Router from "./router";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <main>
          <BrowserRouter
            future={{
              v7_startTransition: true,
            }}>
            <Router />
          </BrowserRouter>
        </main>
      </Provider>
    </>
  );
}

export default App;
