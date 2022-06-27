export default (context, inject) => {
    inject('apiUserTest', api);
    context.$api = api;
  }

  const api = {
    getUser(){
        return fetch('https://randomuser.me/api/');
    }
  }
  