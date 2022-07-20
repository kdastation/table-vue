<template>
  <div class="btn_wrapper">
    <VBtn>
      Создать нового работника
      <VDialog activator="parent" v-model="isOpenModal">
        <ContainerForm>
          <FormCreateEditWorker :is-edit="false" />
        </ContainerForm> </VDialog
    ></VBtn>
  </div>
  <FiltersTable />
  <Table />
</template>

<script lang="ts" setup>
import Table from "@/components/table.vue";
import FormCreateEditWorker from "@/components/forms/form-create-edit-worker.vue";
import { VDialog, VBtn } from "vuetify/lib/components";
import { useMode } from "@/hooks/mode-hook";
import ContainerForm from "@/ui-components/container-form.vue";
import FiltersTable from "@/components/filters-table.vue";
const { mode: isOpenModal, activateMode: onOpenModal } = useMode();
</script>
<style lang="scss" scoped>
.btn_wrapper {
  display: flex;
  justify-content: center;
}
</style>
