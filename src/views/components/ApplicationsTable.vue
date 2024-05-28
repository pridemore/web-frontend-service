<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Applications List</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0"
               @click:row="(item) => clickRow(item.applicationId)"
        >
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Property
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >
              Description
            </th>
            <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Deposited Amount
            </th>
            <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Start Date
            </th>

            <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              End Date
            </th>
            <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Status
            </th>
            <th class="text-secondary opacity-7">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items" :key="item.propertyId">
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <soft-avatar
                      :img="img1"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user1"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{{ item.propertyType }}</h6>
                  <p class="text-xs text-secondary mb-0">
                    {{ item.address }}
                  </p>
                  <p class="text-xs text-secondary mb-0">
                    {{ item.size }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs text-secondary mb-0">{{ item.description }}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs text-secondary mb-0" >${{ item.depositPrice }}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs text-secondary mb-0" >{{ item.startDate }}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs text-secondary mb-0" >{{ item.endDate }}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <soft-badge color="success" variant="gradient" size="sm"
              >{{ item.applicationStatus }}
              </soft-badge
              >
            </td>

            <td class="align-middle text-center" >
              <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
              >View</a>
              <br>
              <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
              >Edit</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import img1 from "../../assets/img/team-2.jpg";
import img2 from "../../assets/img/team-3.jpg";
import img3 from "../../assets/img/team-4.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-2.jpg";
import img6 from "../../assets/img/team-4.jpg";
import axios from "axios";

export default {
  name: "applications-table",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      items: [{
        "startDate": "",
        "endDate": "",
        "depositPrice": '',
        "customerId": '',
        "customerName": "",
        "customerSurname": "",
        "customerEmail": "",
        "propertyType": "",
        "address": "",
        "size": "",
        "description": "",
        "rentalAmount": '',
        "propertyId": '',
        "applicationStatus": ""
      }]
    };
  },
  components: {
    SoftAvatar,
    SoftBadge,
  },
  mounted() {
    this.getApplicationsList();
  },
  methods: {

    async getApplicationsList() {

      const token = localStorage.getItem('user-info').replaceAll("\"", "").trim();
      console.log("Token", token);
      const headers = {
        Authorization: `Bearer ${token}`,
      }

      let result = axios.get("http://localhost:8090/api/applications/all",
          {headers}
      ).then(response => {
        const apiData = response.data.result;
        this.items = apiData
        console.log(apiData.data.result)
      });
      if ((await result).status == 200) {
        this.$router.push({name: 'ApplicationsList'})
      }
    },

  }
};
</script>
