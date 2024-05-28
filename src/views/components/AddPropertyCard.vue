<template>
  <div class="card mt-4" align="center">
    <div class="card-header pb-0 p-3">
      <div class="row" >
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Properties</h6>
        </div>
        <div class="col-6 text-end">
          <soft-button color="dark" variant="gradient">
            View Properties
          </soft-button>
        </div>
      </div>
    </div>

    <div class="card-body">
      <form role="form" @submit.prevent="submitData" class="text-start">
        <label>Property Type</label>
        <input
            class="form-control"
            id="propertyType"
            type="text"
            v-model="propertyType"
            placeholder="Property Type"
            name="propertyType"
        />
        <label>Address</label>
        <input
            class="form-control"
            id="address"
            type="text"
            v-model="address"
            placeholder="Address"
            name="address"
        />
        <label>Size</label>
        <input
            class="form-control"
            id="size"
            type="text"
            v-model="size"
            placeholder="Size"
            name="size"
        />
        <label>Description</label>
        <input
            class="form-control"
            id="description"
            type="text"
            v-model="description"
            placeholder="Description"
            name="description"
        />
        <label>Rental Amount</label>
        <input
            class="form-control"
            id="rentalAmount"
            type="text"
            v-model="rentalAmount"
            placeholder="Rental Amount"
            name="rentalAmount"
        />
        <label>Image</label>
        <input
            class="form-control"
            id="propertyImage"
            type="text"
            v-model="propertyImage"
            placeholder="Property Image"
            name="propertyImage"
        />

        <div >
          <soft-button
              class="my-2 mb-2"
              variant="gradient"
              color="dark"
              full-width
          >Save Property
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
  name: "AddPropertyCard",
  components: {
    SoftButton,
  },
data() {
  return {
    "propertyType": "",
    "address": "",
    "size": "",
    "description": "",
    "rentalAmount": "",
    "propertyImage": ""
  }
},
methods: {

  async submitData() {
    const property = {
      propertyType: this.propertyType,
      address: this.address,
      size: this.size,
      description: this.description,
      rentalAmount: this.rentalAmount,
      propertyImage: this.propertyImage
    }
    const token=localStorage.getItem('user-info').replaceAll("\"","").trim();
    console.log("Token", token);
    const  headers={
      Authorization: `Bearer ${token}`,
    }
    console.warn("Property Data", property)

    let result = axios.post("http://localhost:8090/api/properties/create", property,
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
      this.$router.push({name: 'Properties'})
    }
  }
}
};
</script>
