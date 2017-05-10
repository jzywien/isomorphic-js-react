import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { Provider } from 'react-redux';
import routes from 'routes';
import configureStore from './shared/configureStore';

const app = express();

app.use((req, res) => {
  const location = createLocation(req.url);
  const store = configureStore();

  match({ routes, location }, (err, redirect, props) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!props) return res.status(404).end('Not found.');

    const initialState = store.getState();
    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>
    )
    const componentHTML = renderToString(InitialComponent);
    res.send(renderPage(componentHTML, initialState));
  });
});

const renderPage = (html, initialState) => {
  console.log(initialState);
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Isomorphic Redux Demo</title>
          <script type="application/javascript">
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="application/javascript" src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default app;
