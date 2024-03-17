import { getFieldsValues } from "./Types";

export const fields = [
  { type: "text", name: "name", placeholder: "Nome" },
  { type: "text", name: "lastname", placeholder: "Sobrenome" },
  { type: "text", name: "email", placeholder: "E-mail" },
  { type: "text", name: "dateOfBirthday", placeholder: "Data de Nascimento" },
  { type: "password", name: "password", placeholder: "Senha" },
  { type: "select", name: "country", placeholder: "Selecione seu país" },
];

export const initialValues: getFieldsValues = {
  country: "",
  dateOfBirthday: 0,
  email: "",
  lastname: "",
  name: "",
  password: "",
  bio: "",
  receiveNotifications: false,
};
