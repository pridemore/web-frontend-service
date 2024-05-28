<template>
  <navbar btn-background="bg-gradient-primary"/>
  <div
      class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
      :style="{
      backgroundImage:
        'url(' + require('@/assets/img/curved-images/curved6.jpg') + ')',
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Welcome!</h1>
          <p class="text-white text-lead">
            create new account in your for free.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Register</h5>
          </div>
          <div class="card-body">

            <form role="form" @submit.prevent="submitData" >
              <div class="mb-3">
                <input
                    class="form-control"
                    id="name"
                    type="text"
                    v-model="form.name"
                    placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="surname"
                    type="text"
                    v-model="form.surname"
                    placeholder="Surname"
                    aria-label="Surname"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="username"
                    type="text"
                    v-model="form.username"
                    placeholder="Username"
                    aria-label="Username"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="nationalId"
                    type="text"
                    v-model="form.nationalId"
                    placeholder="National Id"
                    aria-label="National Id"
                />
              </div>
              <div class="mb-3">
                <select class="form-control" v-model="form.gender" id="gender">
                  <option disabled value="">Please Gender</option>
                  <option>MALE</option>
                  <option>FEMALE</option>
                </select>
                </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="dob"
                    type="date"
                    v-model="form.dob"
                    placeholder="Dob"
                    aria-label="Dob"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="email"
                    type="email"
                    v-model="form.email"
                    placeholder="Email"
                    aria-label="Email"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="address"
                    type="text"
                    v-model="form.address"
                    placeholder="Address"
                    aria-label="Address"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="phoneNumber"
                    type="text"
                    v-model="form.phoneNumber"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                />
              </div>
              <div class="mb-3">
                <input
                    class="form-control"
                    id="password"
                    type="password"
                    v-model="form.password"
                    placeholder="Password"
                    aria-label="Password"
                />
              </div>

              <div class="text-center">
                <soft-button
                    color="dark"
                    full-width
                    variant="gradient"
                    class="my-4 mb-2"
                >Sign up
                </soft-button
                >
              </div>
              <p class="text-sm mt-3 mb-0">
                Already have an account?
                <router-link
                    :to="{ name: 'Sign In' }"
                    class="text-dark font-weight-bolder"
                >
                  Sign in
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer/>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
// import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import axios from 'axios';

import {mapMutations} from "vuex";

export default {
  name: "SignupBasic",
  components: {
    Navbar,
    AppFooter,
    // SoftInput,
    SoftButton,
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  data() {
    return {
           form: {
             name: '',
             surname: '',
             username: '',
             password: '',
             nationalId: '',
             gender: '',
             dob: '',
             email: '',
             address: '',
             phoneNumber: '',
             role: 'CUSTOMER'
           }
    }
  },
  methods: {

    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),

    async submitData(){
      console.warn("SignUp Data",this.form)
      axios.post("http://localhost:8090/api/customers/sign-up",this.form
      ).then(response => {
        if(response.data.message==="SUCCESS"){
          console.log(response.data.message);
          alert(response.data.result.name+response.data.result.surname)
        }
        return response.data;
      });
    }

  }
};
</script>
