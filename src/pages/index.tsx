import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Medlingo</h1>
      <p className={styles.subtitle}>
        Aprenda termos médicos de forma divertida e interativa! 
        Teste seus conhecimentos relacionando nomes comuns com nomenclaturas científicas.
      </p>
      <button 
        className={styles.startButton} 
        onClick={() => router.push('/quiz')}
        aria-label="Iniciar o jogo de termos médicos"
      >
        Iniciar Jogo
      </button>
      
      <div className={styles.featuresCard}>
        <h2 className={styles.featuresTitle}>Como Funciona</h2>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>Veja o nome comum da doença</li>
          <li className={styles.featureItem}>Escolha o termo científico correto</li>
          <li className={styles.featureItem}>Acompanhe sua pontuação</li>
          <li className={styles.featureItem}>Aprenda com o feedback instantâneo</li>
        </ul>
      </div>
    </div>
  );
}
