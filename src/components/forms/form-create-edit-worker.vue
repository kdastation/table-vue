<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form_control">
      <VTextField
        name="name"
        label="Имя"
        variant="outlined"
        :error="!!errorMessageName"
        type="text"
        v-model="name"
        @blur="handleBlurName"
        :hint="errorMessageName || ''"
      />
    </div>
    <div class="form_control">
      <VTextField
        name="surname"
        type="text"
        label="Фамилия"
        variant="outlined"
        :error="!!errorMessageSurname"
        v-model="surname"
        @blur="handleBlurSurname"
        :hint="errorMessageSurname || ''"
      />
    </div>
    <div class="form_control">
      <VTextField
        name="patronymic"
        type="text"
        label="Отчество"
        variant="outlined"
        :error="!!errorMessagePatronymic"
        v-model="patronymic"
        @blur="handleBlurPatronymic"
        :hint="errorMessagePatronymic || ''"
      />
    </div>
    <div class="form_control">
      <VTextField
        name="salary"
        type="number"
        label="Оклад $"
        variant="outlined"
        :error="!!errorMessageSalary"
        v-model="salary"
        @blur="handleBlurSalary"
        :hint="errorMessageSalary || ''"
      />
    </div>
    <div class="form_control">
      <VTextField
        name="positionInCompany"
        type="text"
        label="Должность"
        variant="outlined"
        :error="!!errorMessagePositionInCompany"
        v-model="positionInCompany"
        @blur="handleBlurPositionInCompany"
        :hint="errorMessagePositionInCompany || ''"
      />
    </div>
    <div class="form_control">
      <label for="date">
        <input
          id="date"
          type="date"
          v-model="startDate"
          @blur="handleBlurStartDate"
        />
        Дата выхода на работу
      </label>
      <small v-if="errorMessageStartDate">{{
        "Укажите, пожалуйста, дату"
      }}</small>
    </div>
    <div class="form_control">
      <VSelect
        variant="outlined"
        :items="['Полная', 'Половина']"
        label="Ставка"
        v-model="bid"
        :error="!!errorMessageBid"
        @blur="handleBlurBid"
      />
      <small v-if="errorMessageBid">{{ errorMessageBid }}</small>
    </div>
    <div class="form_control">
      <VSwitch
        color="indigo"
        name="bookReturned"
        v-model="bookReturned"
        label="Трудовая книжка"
        hide-details
      ></VSwitch>
    </div>
    <VBtn color="secondary" :disabled="!meta.valid" type="submit">{{
      isEdit ? "Сохранить" : "Создать"
    }}</VBtn>
    <div></div>
  </form>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";

interface IFormCreateEditWorkerFields {
  name: string;
  surname: string;
  patronymic: string;
  bookReturned: boolean;
  salary: number;
  positionInCompany: string;
  startDate: string;
  bid: string;
}

interface IFromCreateEditWorkerProps {
  worker?: IWorker;
  isEdit: boolean;
}

import { useField, useForm } from "vee-validate";
import { VTextField, VSwitch, VBtn, VSelect } from "vuetify/lib/components";
import { validatorsFormCreateEditWorker } from "@/validators/validators-form-create-edit-worker";
import { IWorker } from "@/types/models/worker";
import { defineProps } from "vue";
import { tr } from "vuetify/lib/locale";
const props = defineProps<IFromCreateEditWorkerProps>();
const { worker, isEdit } = props;
const defaultSettings = { validateOnMount: true };
const store = useStore();
const { handleSubmit, meta } = useForm<IFormCreateEditWorkerFields>({
  initialValues: {
    name: worker?.name || "",
    surname: worker?.surname || "",
    bookReturned: worker?.bookReturned || false,
    patronymic: worker?.patronymic || "",
    startDate: worker?.startDate || "",
    salary: worker?.salary || 0,
    positionInCompany: worker?.positionInCompany || "",
    bid: worker?.bid || "Полная",
  },
});

const {
  value: name,
  errorMessage: errorMessageName,
  handleBlur: handleBlurName,
} = useField(
  "name",
  validatorsFormCreateEditWorker.validatorsName,
  defaultSettings
);
const {
  value: surname,
  errorMessage: errorMessageSurname,
  handleBlur: handleBlurSurname,
} = useField(
  "surname",
  validatorsFormCreateEditWorker.validatorsSurname,
  defaultSettings
);
const {
  value: patronymic,
  errorMessage: errorMessagePatronymic,
  handleBlur: handleBlurPatronymic,
} = useField(
  "patronymic",
  validatorsFormCreateEditWorker.validatorsPatronymic,
  defaultSettings
);
const {
  value: positionInCompany,
  errorMessage: errorMessagePositionInCompany,
  handleBlur: handleBlurPositionInCompany,
} = useField(
  "positionInCompany",
  validatorsFormCreateEditWorker.validatorsPositionInCompany,
  defaultSettings
);
const {
  value: salary,
  errorMessage: errorMessageSalary,
  handleBlur: handleBlurSalary,
} = useField(
  "salary",
  validatorsFormCreateEditWorker.validatorsSalary,
  defaultSettings
);

const { value: bookReturned } = useField("bookReturned");

const {
  value: startDate,
  errorMessage: errorMessageStartDate,
  handleBlur: handleBlurStartDate,
} = useField("startDate", validatorsFormCreateEditWorker.validatorsStartDate);

const {
  value: bid,
  errorMessage: errorMessageBid,
  handleBlur: handleBlurBid,
} = useField("bid", validatorsFormCreateEditWorker.validatorsBid);

const onSubmit = handleSubmit((values) => {
  const newWorker: IWorker = {
    id: worker?.id || Math.random(),
    ...values,
  };
  if (props.isEdit) {
    store.commit("workers/editWorker", newWorker);
  } else {
    store.commit("workers/addWorker", newWorker);
  }
});
</script>

<style scoped lang="scss">
.form {
  overflow-y: scroll;
  max-height: 400px;
  padding: 10px;
}
.form_control {
  margin-bottom: 15px;
  small {
    color: red;
    display: block;
    font-size: 14px;
  }
}
</style>
