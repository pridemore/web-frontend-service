<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">

        <div>
          <b-card
              title="Card Title"
              img-src="{https://picsum.photos/600/300/?image=25}"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >

            <b-button href="#" variant="primary">Total Number Of Customers</b-button>
            <br>
            <br>
            <b-card-text>
              {{ report.totalNumberOfCustomers }}
            </b-card-text>

          </b-card>
        </div>


      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">

        <div>
          <b-card
              title="Card Title"
              img-src="{https://picsum.photos/600/300/?image=25}"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >

            <b-button href="#" variant="primary">Total Registered Properties</b-button>
            <br>
            <br>
            <b-card-text>
              {{ report.totalRegisteredProperties }}
            </b-card-text>

          </b-card>
        </div>


      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">

        <div>
          <b-card
              title="Card Title"
              img-src="{https://picsum.photos/600/300/?image=25}"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >

            <b-button href="#" variant="primary">Total Number Of Applications</b-button>
            <br>
            <br>
            <b-card-text>
              {{ report.totalNumberOfApplications }}
            </b-card-text>

          </b-card>
        </div>

      </div>

    </div>
    <div class="mt-4 row">
      <div class="mb-4 col-lg-5 mb-lg-0">
        <div class="card z-index-2">
          <div class="p-3 card-body">
            <reports-bar-chart
                id="chart-bar"
                title="active Users"
                description="(<strong>+23%</strong>) than last week"
                :chart="{
                labels: [
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                datasets: {
                  label: 'Sales',
                  data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
                },
              }"
                :items="[
                {
                  icon: {
                    color: 'primary',
                    component: faUsers,
                  },
                  label: 'users',
                  progress: { content: '37K', percentage: 60 },
                },
                {
                  icon: { color: 'info', component: faHandPointer },
                  label: 'clicks',
                  progress: { content: '2m', percentage: 90 },
                },
                {
                  icon: { color: 'warning', component: faCreditCard },
                  label: 'Sales',
                  progress: { content: '435$', percentage: 30 },
                },
                {
                  icon: { color: 'danger', component: faScrewdriverWrench },
                  label: 'Items',
                  progress: { content: report.totalNumberOfCustomers },
                },
              ]"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <!-- line chart -->

      </div>
    </div>

  </div>
</template>
<script>
import ReportsBarChart from "@/examples/Charts/ReportsBarChart.vue";
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";
import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default {
  name: "dashboard-default",
  data() {
    return {
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
      report: {
        "totalNumberOfCustomers": '',
        "totalRegisteredProperties": '',
        "totalNumberOfApplications": ''
      },

      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    ReportsBarChart,
  },
  mounted() {
    this.getReport();
  }
  ,
  methods: {
    async getReport() {

      const token = localStorage.getItem('user-info').replaceAll("\"", "").trim();
      console.log("Token", token);
      const headers = {
        Authorization: `Bearer ${token}`,
      }

      axios.get("http://localhost:8090/api/reports/statisticalData",
          {headers}
      ).then(response => {
        const apiData = response.data.result;
        this.report = apiData
        console.log(apiData.data.result)
      });
    },
  }
};
</script>
