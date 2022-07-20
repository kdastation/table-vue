<template>
  <div class="filters_table">
    <h3>Сортировка</h3>
    <select class="select" :value="filter" @change="onChangeFilter">
      <option :value="''">Без сортировки</option>
      <option v-for="value in dataFiltersTable" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
    <VBtn @click="sortOnCLick" color="success">Отсортировать</VBtn>
  </div>
</template>

<script lang="ts" setup>
import { dataFiltersTable } from "@/data-components/data-filters-table";
import { useStore } from "@/store";
import { computed, watch } from "vue";
const store = useStore();
const filter = computed(() => {
  return store.getters["workers/getFilter"];
});
const onChangeFilter = (e: any) => {
  store.commit("workers/setFilter", e.target.value);
};
const sortOnCLick = () => {
  store.commit("workers/sortWorkers");
};
</script>

<style scoped lang="scss">
.filters_table {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.select {
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid black;
}
</style>
