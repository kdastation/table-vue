<template>
  <div class="worker" v-if="worker">
    <router-link to="/">на главную</router-link>
    <h2>Имя: {{ worker.name }}</h2>
    <h3>Фамилия: {{ worker.surname }}</h3>
    <h3>Отчество: {{ worker.patronymic }}</h3>
    <h4>Ставка: {{ worker.bid }}</h4>
    <h4>Должность: {{ worker.positionInCompany }}</h4>
    <h4>Зарплата: {{ worker.salary }}</h4>
    <h4>Трудовая книжка сдана: {{ worker.bookReturned ? "Да" : "Нет" }}</h4>
    <h4>Дата выхода на работу: {{ worker.startDate }}</h4>
  </div>
  <div v-else>Такого работника не найдено!</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "@/store";
import { IWorker } from "@/types/models/worker";
import { VBtn } from "vuetify/lib/components";
const store = useStore();
const route = useRoute();
const worker = computed(() => {
  const workers = store.getters["workers/getWorkers"] as IWorker[];
  return workers.find((worker) => worker.id === Number(route.params.id));
});
</script>

<style scoped lang="scss">
.worker {
  text-align: center;
}
</style>
