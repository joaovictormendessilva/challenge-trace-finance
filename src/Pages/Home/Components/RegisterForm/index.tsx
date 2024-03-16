import styles from "./RegisterForm.module.css";
export function RegisterForm() {
  return (
    <form action="">
      <h2>Cadastre-se</h2>
      <p className={styles.subtitle}>Para começar, insira os dados abaixo:</p>

      <div className={styles.formControl}>
        <input type="text" name="name" placeholder="Nome" />
      </div>
      <div className={styles.formControl}>
        <input type="text" name="lastname" placeholder="Sobrenome" />
      </div>
      <div className={styles.formControl}>
        <input type="text" name="email" placeholder="E-mail" />
      </div>
      <div className={styles.formControl}>
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Data de Nascimento"
        />
      </div>
      <div className={styles.formControl}>
        <input type="password" name="password" placeholder="Senha" />
      </div>
      <div className={styles.formControl}>
        <input type="select" name="country" placeholder="Selecione seu país" />
      </div>
      <div className={styles.formControl}>
        <textarea name="bio" placeholder="Bio" />
      </div>

      <button className={styles.registerButton}>Cadastrar</button>

      <div className={styles.checkboxNotifications}>
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications">Desejo receber notificações</label>
      </div>
    </form>
  );
}
