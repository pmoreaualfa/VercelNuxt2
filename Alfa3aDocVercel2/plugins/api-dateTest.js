export default (context, inject) => {
    inject('apiDateTest', api);
    context.$apiDateTest = api;
  }

  const api = {
    getDate(){
        return fetch('/api/dateTest/date');
    }
  }
  