import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from "./pages/common/ErrorPage";


const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);


const Main = () => {

    return (
        <></>
    )

}


const logError = (error, info) => {

}

root.render(
  <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={logError}
  >
      <Main />
  </ErrorBoundary>
);

