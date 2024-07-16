
import PomeloClient from '../lib/main'

// 创建对象
const client = new PomeloClient()

// init
function queryEntry(vendor: string, token: string, callback: Function) {
  client.init({
    url: 'ws://localhost:3579',
    docsRoute: 'connector.meta.docs',
    log: true,
  }, function () {
    client.request('connector.auth.login', {vendor, token}, function (response: any) {
      console.log(response);

      callback();
    })
  });
}


queryEntry('default', 'buddy-01', function () {
  console.log('after login.');
});

