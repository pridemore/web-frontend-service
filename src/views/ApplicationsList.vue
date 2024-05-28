<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <applications-table />
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationsTable from "@/views/components/ApplicationsTable.vue";
export default {
  name: "ApplicationsList",
  components: {
    ApplicationsTable,
  },
}
</script>

