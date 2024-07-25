# pitaya-ws-client

this is an html5 websocket client for pitaya, and compatible with pomelo, pinus.

this is a fork from pomelo-websocket client.

## protobufjs

use this commands to convert.

```shell
npx pbjs -t static-module -w commonjs -o lib/protos/pitaya/bundle.js protos/pitaya/*.proto
npx pbts -o lib/protos/pitaya/bundle.d.ts lib/protos/pitaya/bundle.js
```