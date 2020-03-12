<template>
  <div id="app">
    Vue JS mounted successfully
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const data = {
      firstName: 'teeest',
      lastName: 'last name',
      email: 'mail@mail.com',
      password: '123qwerrty',
    };
    // https://us-central1-vuejs-c6236.cloudfunctions.net/api
    // http://localhost:5000/vuejs-c6236/us-central1/api
    fetch('https://us-central1-vuejs-c6236.cloudfunctions.net/api/user', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss">
</style>
