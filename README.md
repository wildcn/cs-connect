# cs-connect [NEW]
1
connect client and server;

## Install

```shell
npm install @bbfe/cs-connect
```

## Example

```javascript
/*
Client
*/

import server from 'server';
// connect target
import connect  from '@bbfe/cs-connect';
const resourceAgent = connect('desktop', server);

resourceAgent.addRequestInterceptors(function(request) {
  console.log('request', request);
  return request;
});

resourceAgent.addResponseInterceptors(function(response) {
  console.log('response', response);
  return response;
});

```
