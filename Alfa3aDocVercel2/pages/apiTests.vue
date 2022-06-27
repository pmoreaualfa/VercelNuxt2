<template>
  <div>
    <Header />
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-yellow-500 font-semibold tracking-wide uppercase">
            Tests connexions API
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            API et Middleware
          </p>
          <h2 class="mt-5 mb-1 text-gray-50 mt-5 bg-yellow-500 rounded text-sm px-3 py-1">
            getDate basique (tuto)
          </h2>
          <div>
            <p class="pl-2 text-sm">
              <button
                v-on:click="serverDateOld"
                class="bg-gray-300 rounded px-3 py-1 text-xs"
              >
                update
              </button>
              {{ myDateOld }}
            </p>
          </div>
          <h2 class="mt-5 mb-1 text-gray-50 mt-5 bg-yellow-500 rounded text-sm px-3 py-1">
            getDate sous DateTest
          </h2>
          <div>
            <p class="pl-2 text-sm">
              <button
                v-on:click="serverDate"
                class="bg-gray-300 rounded px-3 py-1 text-xs"
              >
                update
              </button>
              {{ myDate }}
            </p>
          </div>
          <h2 class="mt-5 mb-1 text-gray-50 mt-5 bg-yellow-500 rounded text-sm px-3 py-1">
            free API test
          </h2>
          <div>
            <p class="pl-2 text-sm">
              <button
                v-on:click="serverUser"
                class="bg-gray-300 rounded px-3 py-1 text-xs"
              >
                update
              </button>
            </p>
            <div v-if="myUsers">
            <!-- {{ myUsers }} -->
              <ul>
                <li v-for="user in myUsers" key="user.uuid">
                  <!-- {{ user.name.first }} {{ user.name.last }}
                  {{ user.email }} -->

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" :src="user.picture.large" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ user.name.first }} {{ user.name.last }}</h5>
      <p class="text-gray-700 text-base mb-4">
       {{ user.email }}
      </p>
      <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>







                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  name: "Contact",
  components: { Header },
  data() {
    const myDateOld = "test API Date OLD";
    const myDate = "test API Date ";
    const myUsers = [];
    // const myDate = this.serverDate();
    return { myUsers, myDate, myDateOld };
  },
  methods: {
    async serverDateOld() {
      let result = await this.$api.getDate();
      console.log(result);
      this.myDateOld = await result.json();
    },
    async serverDate() {
      let result = await this.$apiDateTest.getDate();
      console.log(result);
      this.myDate = await result.json();
    },
    async serverUser() {
      let result = await this.$apiUserTest.getUser();
      console.log(result);
      result = await result.json();
      this.myUsers = result.results;
    },
  },
};
</script>
