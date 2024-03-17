import { ChangeEvent, useCallback, useState } from "react";
import styles from "./RegisterForm.module.css";
import { fields, initialValues } from "./utils";
import { RegisterFormViewModel } from "./RegisterFormViewModel";
import { getFieldsValues } from "./Types";

export function RegisterForm() {
  const [getFields, setGetFields] = useState<getFieldsValues>(initialValues);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setGetFields((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = useCallback(() => {
    console.log(getFields);
  }, [getFields]);

  const viewModel = new RegisterFormViewModel(getFields);

  return (
    <form>
      <h2>Cadastre-se</h2>
      <p className={styles.subtitle}>Para começar, insira os dados abaixo:</p>

      {fields.map((field) => (
        <div className={styles.formControl} key={field.name}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}

      <div className={styles.formControl}>
        <textarea name="bio" placeholder="Bio" onChange={handleChange} />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className={styles.registerButton}
        disabled={viewModel.getDisable()}
      >
        Cadastrar
      </button>

      <div className={styles.checkboxNotifications}>
        <input
          name="receiveNotifications"
          type="checkbox"
          id="notifications"
          onChange={handleChange}
        />
        <label htmlFor="notifications">Desejo receber notificações</label>
      </div>
    </form>
  );
}
