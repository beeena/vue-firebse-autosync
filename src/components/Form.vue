<template>
  <div class="form mt-5">
    <div class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200"
          >
            Task in progress
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-pink-600">
            {{ formData.progress || 0 }}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
          :style="`width: ${formData.progress || 0}%`"
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
        ></div>
      </div>
    </div>
    <form
      action=""
      class="mt-10 rounded overflow-hidden shadow-lg p-5"
      @input="fieldUpdate"
      @submit.prevent="updateFirebase"
    >
      <h1 class="text-4xl mb-4 text-center">Form</h1>
      <input
        class="bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Name"
        v-model="formData.name"
      />
      <input
        class="bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="Email"
        v-model="formData.email"
      />
      <input
        class="bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Phone"
        v-model="formData.phone"
      />
      <input
        class="bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Address"
        v-model="formData.address"
      />
      <input
        class="bg-white mb-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        placeholder="Country"
        v-model="formData.country"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import store from '../store'
import { db } from "../firebase";

@Component
export default class Form extends Vue {

  get formData() {
    let users: any = store.state.users
    let data: any;
    if (users && users.length > 0) {
        data = users[0];
      } else {
        data = {}
      }
    return data
  }

  @Watch('users')

  created() {
    store.dispatch("bindUsers")
  }

  async updateFirebase() {
    try {
      await db.doc("users/mubina").update(this.formData);
    } catch (error) {
      console.log(error)
    }
  }
  fieldUpdate() {
    this.debouncedUpdate();
  }
  debouncedUpdate(){
    setTimeout(()=> {
      this.updateFirebase();
    }, 2000)
  }

}
</script>
