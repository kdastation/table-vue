<template>
  <div v-if="isOpen" class="modal" @click="emit('close')">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IModalEmits {
  (e: "close"): void;
}

interface IModalProps {
  isOpen: boolean;
}

const emit = defineEmits<IModalEmits>();
const props = defineProps<IModalProps>();
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
