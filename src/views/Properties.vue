<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-md-12 mb-4">
            <payment-methods-card />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import setTooltip from "@/assets/js/tooltip.js";
import PaymentMethodsCard from "./components/PaymentMethodsCard.vue";
export default {
  name: "Properties",
  components: {
    PaymentMethodsCard,
  },
  mounted() {
    setTooltip();
  },
};
</script>