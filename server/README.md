# Server-Side Rendering of React

**Server-Side Rendering** enable search engines crawl your pages and usually a faster page loading.
For React, **ReactDOMServer** enables you to render components to static markup.

## ReactDOMServer

How to import ReactDOMServer?

```javascript
import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');
```

There are four parts in **ReactDOMServer**, that are

- renderToString
- RenderToStaticMarkup
- RenderToNodeStream
- RenderToStaticNodeStream
