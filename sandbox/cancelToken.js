const axios = require('../index');
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

const URL = 'http://127.0.0.1:3000/api';
const BODY = {
  foo: 'bar',
  baz: 1234
};

function handleSuccess(data) { console.log(data); }
function handleFailure(data) { console.log('error', data); }

let cancel;

axios.get(URL, { 
  params: BODY, 
  cancelToken: new axios.CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
  // cancelToken: source.token
})
  .then(handleSuccess)
  .catch(handleFailure);

cancel(); // 取消请求
// source.cancel();
