<template>
  <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item" v-if="hasRole('ADMIN')">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <shop/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('CUSTOMER')">
        <sidenav-collapse navText="Available Properties" :to="{ name: 'HomeProperties' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Profile" :to="{ name: 'Profile' }">
          <template #icon>
            <customer-support/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('ADMIN')">
        <sidenav-collapse navText="Add Properties" :to="{ name: 'Properties' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('ADMIN')">
        <sidenav-collapse navText="Properties List" :to="{ name: 'PropertiesList' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('CUSTOMER')">
        <sidenav-collapse navText="Apply Properties" :to="{ name: 'PropertiesList' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('CUSTOMER')">
        <sidenav-collapse navText="My Applications" :to="{ name: 'ApplicationsList' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item" v-if="hasRole('ADMIN')">
        <sidenav-collapse navText="Applications List" :to="{ name: 'ApplicationsList' }">
          <template #icon>
            <credit-card/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Logout" @click="logout" :to="{ name: 'Sign In' }">
          <template #icon>
            <spaceship/>
          </template>
        </sidenav-collapse>
      </li>


      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="Tables" :to="{ name: 'Tables' }">-->
      <!--          <template #icon>-->
      <!--            <office />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="Billing" :to="{ name: 'Billing' }">-->
      <!--          <template #icon>-->
      <!--            <credit-card />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->

      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse-->
      <!--          navText="Virtual Reality"-->
      <!--          :to="{ name: 'Virtual Reality' }"-->
      <!--        >-->
      <!--          <template #icon>-->
      <!--            <box3d />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="RTL" :to="{ name: 'Rtl' }">-->
      <!--          <template #icon>-->
      <!--            <settings />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="mt-3 nav-item">-->
      <!--        <h6-->
      <!--          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"-->
      <!--          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"-->
      <!--        >-->
      <!--          PAGES-->
      <!--        </h6>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="Profile" :to="{ name: 'Profile' }">-->
      <!--          <template #icon>-->
      <!--            <customer-support />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="Sign In" :to="{ name: 'Sign In' }">-->
      <!--          <template #icon>-->
      <!--            <document />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
      <!--      <li class="nav-item">-->
      <!--        <sidenav-collapse navText="Sign Up" :to="{ name: 'Sign Up' }">-->
      <!--          <template #icon>-->
      <!--            <spaceship />-->
      <!--          </template>-->
      <!--        </sidenav-collapse>-->
      <!--      </li>-->
    </ul>
  </div>

</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../../components/Icon/Shop.vue";
import CreditCard from "../../components/Icon/CreditCard.vue";
import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
import Spaceship from "../../components/Icon/Spaceship.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    Shop,
    CreditCard,
    CustomerSupport,
    Spaceship,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    hasRole(role) {
      let userRole = null;
      if (localStorage.getItem('role') != null) {
        userRole = localStorage.getItem('role').replaceAll("\"", "").trim();
        return userRole === role;
      } else {
        return 'CUSTOMER' === role
      }

    },
    logout() {
      localStorage.clear();
      // Additional actions for logout:
      this.$router.push('/sign-in'); // Redirect to login route
      this.$emit('logout-event');  // Emit a custom event for logout handling
    }
  },
};
</script>
