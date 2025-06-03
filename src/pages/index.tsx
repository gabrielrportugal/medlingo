import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>Medlingo</h1>
      <button className={styles.button} onClick={() => router.push('/quiz')}>Iniciar Jogo</button>
    </div>
  );
}