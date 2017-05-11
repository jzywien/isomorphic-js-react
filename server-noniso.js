import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { Provider } from 'react-redux';
import routes from 'routes';
import configureStore from './shared/configureStore';
import fetchComponentData from './shared/lib/fetchComponentData';
import initialState from './shared/initialState';

const app = express();

app.use((req, res) => {
  res.send(staticHtml);
});

const staticHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root"></div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
`;

export default app;
