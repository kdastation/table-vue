import { ref } from "vue";

export const useMode = () => {
  const mode = ref(false);
  const activateMode = () => {
    mode.value = true;
  };
  const deactivateMode = () => {
    mode.value = false;
  };
  return {
    mode,
    activateMode,
    deactivateMode,
  };
};
