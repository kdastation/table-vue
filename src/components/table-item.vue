<template>
  <tr>
    <td>{{ worker.name }}</td>
    <td>{{ worker.surname }}</td>
    <td>{{ worker.patronymic }}</td>
    <td>{{ worker.positionInCompany }}</td>
    <td>
      <VBtn @click="onOpenModalEditForm" color="primary">Редактировать</VBtn>
    </td>
    <td>
      <VBtn @click="onOpenModalDelete" color="error">Удалить</VBtn>
    </td>
    <td>
      <router-link :to="`${RoutesPathNames.WORKER_VIEW_FOR_LINK}${worker.id}`"
        >Посмотреть детальнее</router-link
      >
    </td>
    <VDialog v-model="isOpenModalFormEdit">
      <ContainerForm>
        <FormCreateEditWorker :worker="worker" :is-edit="true" />
      </ContainerForm>
    </VDialog>
    <Modal :is-open="isOpenModalDelete" @close="onCloseModalDelete">
      <div class="delete_buttons">
        <VBtn color="error" @click="deleteWorker">Подтвердить</VBtn>
        <VBtn @click="onCloseModalDelete">Отмена</VBtn>
      </div>
    </Modal>
  </tr>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IWorker } from "@/types/models/worker";
import { useMode } from "@/hooks/mode-hook";
import { VBtn, VDialog } from "vuetify/lib/components";
import { useStore } from "@/store";
import { RoutesPathNames } from "@/router/routes-path-names";
import Modal from "@/ui-components/modal.vue";
import ContainerForm from "@/ui-components/container-form.vue";
import FormCreateEditWorker from "@/components/forms/form-create-edit-worker.vue";

interface ITableItemProps {
  worker: IWorker;
}
const store = useStore();
const props = defineProps<ITableItemProps>();
const { worker } = props;
const { mode: isOpenModalFormEdit, activateMode: onOpenModalEditForm } =
  useMode();
const {
  mode: isOpenModalDelete,
  activateMode: onOpenModalDelete,
  deactivateMode: onCloseModalDelete,
} = useMode();
const deleteWorker = () => {
  onCloseModalDelete();
  store.commit("workers/removeWorker", worker);
};
</script>

<style scoped lang="scss">
.delete_buttons {
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
