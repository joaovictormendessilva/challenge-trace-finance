import { RegisterForm } from "./Components/RegisterForm";
import styles from "./Home.module.css";
export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>

      <div className={styles.titleAndInfoContainer}>
        <div className={styles.content}>
          <h1>Teste técnico</h1>
          <hr className={styles.divider} />
          <p>
            Controle suas contas nacionais<br></br> e internacionais em um único
            lugar!
          </p>
        </div>
      </div>
    </div>
  );
}
