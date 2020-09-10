import request from '@utils/request';

export default async function getRemoteList() {
  return request('/api/all',{
    method:"get"
  })
  .then((response) => {
    console.log('111'+response);
    return response
  })
  .catch((error) => error)
};
// export  async function editRecord(values) {
//   return request('/api/all',{
//     method:"post"
//   })
//   .then((response) => {
//     console.log('111'+response);
//     return response
//   })
//   .catch((error) => error)
// }

