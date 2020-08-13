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
            <!-- {{ progress }}% -->
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
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

<script>
import { mapState } from "vuex";
import { db } from "./../firebase";
import { debounce } from "debounce";
export default {
  data() {
    return {
      state: "loading",
      formData: {},
      errorMessage: "",
    };
  },
  computed: {
    ...mapState(["users"]),
  },
  watch: {
    users(val) {
      if (val && val.length > 0) {
        this.formData = val[0];
      } else {
        this.formData = {
          name: "",
          phone: "",
          email: "",
          address: "",
          country: "",
        };
      }
    },
  },
  created() {
    this.$store.dispatch("bindUsers");
  },
  methods: {
    async updateFirebase() {
      try {
        await db.doc("users/mubina").set(this.formData);
        this.state = "synced";
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = "error";
      }
    },
    fieldUpdate() {
      this.state = "modified";
      this.debouncedUpdate();
    },
    debouncedUpdate: debounce(function() {
      this.updateFirebase();
    }, 2000),
  },
};
</script>

<style></style>
