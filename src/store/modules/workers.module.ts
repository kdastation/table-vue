import { Module } from "vuex";
import { State } from "@/store";
import { IWorker } from "@/types/models/worker";
import { Utils } from "@/utils/utils";
import { SettingsWorkers } from "@/settings/settings-workers";
import { WorkerService } from "@/service/worker-service";
import { filter } from "@/types/filter";

export interface IWorkersModuleState {
  workers: IWorker[];
  filter: filter | "";
}

export const workersModule: Module<IWorkersModuleState, State> = {
  state: {
    workers:
      Utils.getItemsForLocalStorage(SettingsWorkers.keyLocalStorage) || [],
    filter: "",
  },
  mutations: {
    addWorker(state, newWorker: IWorker) {
      state.workers.push(newWorker);
      Utils.setItemsInLocalStorage(
        SettingsWorkers.keyLocalStorage,
        state.workers
      );
    },
    removeWorker(state, workerForRemove: IWorker) {
      const indexWorker = WorkerService.findWorkerIndex(
        state.workers,
        workerForRemove
      );
      state.workers.splice(indexWorker, 1);
      Utils.setItemsInLocalStorage(
        SettingsWorkers.keyLocalStorage,
        state.workers
      );
    },
    editWorker(state, newWorker: IWorker) {
      const worker = WorkerService.findWorker(state.workers, newWorker);
      if (worker) {
        WorkerService.updateWorker(worker, newWorker);
      }
      Utils.setItemsInLocalStorage(
        SettingsWorkers.keyLocalStorage,
        state.workers
      );
    },
    sortWorkers(state) {
      if (state.filter) {
        WorkerService.sortWorkers(state.workers, state.filter);
      } else {
        state.workers =
          Utils.getItemsForLocalStorage(SettingsWorkers.keyLocalStorage) || [];
      }
    },
    setFilter(state, filter: filter) {
      state.filter = filter;
    },
  },
  getters: {
    getWorkers(state): IWorker[] {
      return state.workers;
    },
    getFilter(state): filter | "" {
      return state.filter;
    },
  },
  namespaced: true,
};
