import { getFieldsValues } from "./Types";

export class RegisterFormViewModel {
  constructor(readonly getFields: getFieldsValues) {}

  getDisable(): boolean {
    const data =
      this.getFields.country === "" ||
      this.getFields.dateOfBirthday === 0 ||
      this.getFields.email === "" ||
      this.getFields.lastname === "" ||
      this.getFields.name === "" ||
      this.getFields.password === "" ||
      this.getFields.bio === "";

    return data;
  }
}
