<template>
    <div class="container-fluid">
    <div
        class="mt-4 page-header  border-radius-xl"
        :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
        height:'70px',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Available Properties</h6>
            <p class="text-sm">Properties List</p>
          </div>
          <div class="p-3 card-body">
            <div class="row">

              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0" v-for="item in items" :key="item.propertyId">
                <div class="card card-blog card-plain" >
                  <div class="position-relative">
                    <a class="shadow-xl d-block border-radius-xl">
                      <img
                          :src="img2"
                          alt="img-blur-shadow"
                          class="shadow img-fluid border-radius-xl"
                      />
                    </a>
                  </div>
                  <div class="px-1 pb-0 card-body">
                    <p class="mb-2 text-sm text-gradient text-dark">{{item.address}} </p>
                    <a href="javascript:;">
                      <h5>{{item.propertyType}} </h5>
                    </a>
                    <p class="mb-4 text-sm">
                      {{ item.description }}
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                      <button
                          type="button"
                          class="mb-0 btn btn-sm"
                          :class="`btn-outline-success`"
                      >
                        View Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import setNavPills from "@/assets/js/nav-pills";
import setTooltip from "@/assets/js/tooltip";
import axios from "axios";
import {mapMutations} from "vuex";

export default {
  name: "HomeProperties",
  components: {
  },
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      faFacebook,
      faTwitter,
      faInstagram,
      items: [{
        "propertyId": '',
        "propertyType": '',
        "address": '',
        "size": '',
        "description": '',
        "rentalAmount": '',
        "hasApplication": '',
        "propertyStatus": '',
        "propertyImage": '',
        "status": '',
        "dateCreated": '',
        "lastUpdated": ''
      }]
    };
  },
   mounted() {
    this.getAvailablePropertiesList();
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  created() {
    this.toggleSidenavDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleSidenavDisplay();
    this.toggleHideConfig();
    this.$store.state.isAbsolute = false;
  },
  methods: {
    ...mapMutations(["toggleSidenavDisplay", "toggleHideConfig"]),
    async getAvailablePropertiesList() {
       axios.get("http://localhost:8090/api/properties/allAvailable"
      ).then(response => {
        const apiData = response.data.result;
        this.items = apiData
        console.log("items set")
      });
      // if ((await result).status == 200) {
      //   this.$router.push({name: 'HomeProperties'})
      // }
    }
  },
  // beforeUnmount() {
  //   this.$store.state.isAbsolute = false;
  // }
};
</script>