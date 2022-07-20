import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import {
  workersModule as workers,
  IWorkersModuleState,
} from "@/store/modules/workers.module";

export interface State {
  workers: IWorkersModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    workers,
  },
});

export function useStore() {
  return baseUseStore(key);
}
