import { IWorker } from "@/types/models/worker";
import { filter } from "@/types/filter";

export class WorkerService {
  static updateWorker(oldWorker: IWorker, newWorker: IWorker) {
    // @ts-ignore
    Object.keys(oldWorker).forEach((key) => (oldWorker[key] = newWorker[key]));
  }
  static sortWorkers(workers: IWorker[], methodFilter: filter) {
    workers.sort((a, b) => {
      if (a[methodFilter] > b[methodFilter]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  static findWorkerIndex(workers: IWorker[], worker: IWorker) {
    return workers.findIndex((workerElement) => workerElement.id === worker.id);
  }

  static findWorker(workers: IWorker[], worker: IWorker) {
    return workers[this.findWorkerIndex(workers, worker)];
  }
}
