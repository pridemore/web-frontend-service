<template>
  <div class="card mt-4" align="center">
    <div class="card-header pb-0 p-3">
      <div class="row" >
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Property Application</h6>
        </div>
        <div class="col-6 text-end">
          <soft-button color="dark" variant="gradient">
            View Application
          </soft-button>
        </div>
      </div>
    </div>

    <div class="card-body">
      <form role="form" @submit.prevent="submitData" class="text-start">
        <label>Start Date</label>
        <input
            class="form-control"
            id="propertyType"
            type="date"
            v-model="startDate"
            placeholder="Start date"
            name="startDate"
        />
        <label>End Date</label>
        <input
            class="form-control"
            id="address"
            type="date"
            v-model="endDate"
            placeholder="End Date"
            name="endDate"
        />
        <label>Deposit Price</label>
        <input
            class="form-control"
            id="size"
            type="number"
            v-model="depositPrice"
            placeholder="Deposit Price"
            name="depositPrice"
        />
        <input
            hidden="hidden"
            class="form-control"
            id="propertyId"
            type="number"
            v-model="propertyId"
            name="propertyId"
        />
        <div >
          <soft-button
              class="my-2 mb-2"
              variant="gradient"
              color="dark"
              full-width
          >Submit Application
          </soft-button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import SoftButton from "@/components/SoftButton.vue";
import axios from "axios";

export default {
  name: "AddApplicationCard",
  props:['property-id'],
  components: {
    SoftButton,
  },
data() {
  return {
    "startDate": "",
    "endDate": "",
    "depositPrice": "",
    "customerId": localStorage.getItem('customer-id'),
    "propertyId": this.$route.params.propertyId
  }
},
  methods: {

  async submitData() {
    const application = {
      startDate: this.startDate,
      endDate: this.endDate,
      depositPrice: this.depositPrice,
      customerId: this.customerId,
      propertyId: this.propertyId
    }
    const token=localStorage.getItem('user-info').replaceAll("\"","").trim();
    console.log("Token", token);
    const  headers={
      Authorization: `Bearer ${token}`,
    }
    console.warn("Application Data", application)

    let result = axios.post("http://localhost:8090/api/applications/create", application,
        {headers}
    ).then(response => {
      console.log("response code", response.status);
      if (response.status == 200) {
        console.log("message", response.data.message);
        alert(response.data.result.description)
      } else {
        alert(response.data.message)
      }
      return response;
    });
    if ((await result).status == 200) {
      this.$router.push({name: 'ApplicationList'})
    }
  },

}
};
</script>
