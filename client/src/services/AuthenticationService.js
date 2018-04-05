/* eslint-disable*/
import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  }
};
//
// AuthorizationService.register({
//   email: 'testing@qq.com',
//   password: '123456'
// })
