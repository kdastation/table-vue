import * as yup from "yup";

export enum ErrorMessage {
  MESSAGE_REQUIRED = "Поле обязательно к заполнению",
}

export const validatorsFormCreateEditWorker = {
  validatorsName: yup.string().trim().required(ErrorMessage.MESSAGE_REQUIRED),
  validatorsSurname: yup
    .string()
    .trim()
    .required(ErrorMessage.MESSAGE_REQUIRED),
  validatorsPositionInCompany: yup
    .string()
    .trim()
    .required(ErrorMessage.MESSAGE_REQUIRED),
  validatorsPatronymic: yup
    .string()
    .trim()
    .required(ErrorMessage.MESSAGE_REQUIRED),
  validatorsSalary: yup
    .number()
    .required("Поле обязательно к заполнению")
    .min(0, "Оклад не может быть отрицательным"),
  validatorsStartDate: yup.date().required(ErrorMessage.MESSAGE_REQUIRED),
  validatorsBid: yup.string().required(ErrorMessage.MESSAGE_REQUIRED),
};
