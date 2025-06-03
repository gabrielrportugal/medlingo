import { useEffect, useState } from 'react';
import { medicalTerms, MedicalTerm } from '../data/medicalTerms';
import { getRandomTerm } from '../utils/quizLogic';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  const [current, setCurrent] = useState<MedicalTerm | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  function loadNewQuestion() {
    const term = getRandomTerm(medicalTerms, current);
    const allOptions = [...term.distractors, term.scientificName].sort(() => Math.random() - 0.5);
    setCurrent(term);
    setOptions(allOptions);
    setFeedback('');
    setAnswered(false);
  }

  function handleAnswer(option: string) {
    if (!current) return;
    if (option === current.scientificName) {
      setScore(score + 1);
      setFeedback('Correto!');
    } else {
      setFeedback(`Incorreto! A resposta correta é ${current.scientificName}`);
    }
    setAnswered(true);
  }

  return (
    <div className={styles.container}>
      <h2>Pontuação: {score}</h2>
      {current && (
        <>
          <p><strong>{current.commonName}</strong></p>
          {options.map(option => (
            <button className={styles.button} key={option} onClick={() => handleAnswer(option)} disabled={answered}>
              {option}
            </button>
          ))}
          {feedback && <p className={feedback === 'Correto!' ? styles.correct : styles.incorrect}>{feedback}</p>}
          {answered && <button className={styles.button} onClick={loadNewQuestion}>Próxima Pergunta</button>}
        </>
      )}
    </div>
  );
}