import request from '@utils/request';

export default async function getRemoteList() {
  return request('/api/users',{
    method:"get"
  })
  .then((response) => {
    console.log('111'+response);
    return response
  })
  .catch((error) => error)
  // const data = {"data":[{"id":2509,"name":"2","email":"","create_time":"2020-09-09T14:36:29Z","update_time":"2020-09-09T14:36:29Z","status":1},{"id":2508,"name":"2","email":"","create_time":"2020-09-09T14:33:10Z","update_time":"2020-09-09T14:33:10Z","status":1},{"id":2507,"name":"1","email":"","create_time":"2020-09-09T14:30:17Z","update_time":"2020-09-09T14:30:17Z","status":1},{"id":2488,"name":"999","email":"ewfw","create_time":"2020-09-03T16:41:44Z","update_time":"2020-09-09T13:32:56Z","status":1},{"id":2483,"name":"2222","email":"12313131@qq.com","create_time":"2020-09-06T19:22:12Z","update_time":"2020-09-09T13:33:25Z","status":1},{"id":2482,"name":"1111","email":"312321312911@qq.com","create_time":"2020-09-06T11:22:09Z","update_time":"2020-09-09T13:42:30Z","status":1},{"id":2460,"name":"hello","email":"baihuaone@hotmail.com","create_time":"2020-09-04T21:08:38Z","update_time":"2020-09-05T17:35:58Z","status":1}],"meta":{"total":7,"per_page":10,"page":1}}
  // return data
}

