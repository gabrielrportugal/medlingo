import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { medicalTerms, MedicalTerm } from '../data/medicalTerms';
import { getRandomTerm } from '../utils/quizLogic';
import styles from '../styles/Quiz.module.css';

export default function Quiz() {
  const router = useRouter();
  const [current, setCurrent] = useState<MedicalTerm | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = useCallback(() => {
    setIsLoading(true);
    
    // Pequeno delay para suavizar a transição
    setTimeout(() => {
      const term = getRandomTerm(medicalTerms, current);
      const allOptions = [...term.distractors, term.scientificName].sort(() => Math.random() - 0.5);
      setCurrent(term);
      setOptions(allOptions);
      setFeedback('');
      setAnswered(false);
      setSelectedOption(null);
      setScoreUpdated(false);
      setIsLoading(false);
    }, 300);
  }, [current]);

  const handleAnswer = useCallback((option: string) => {
    if (!current || answered) return;
    
    setSelectedOption(option);
    setAnswered(true);
    
    if (option === current.scientificName) {
      setScore(prevScore => prevScore + 1);
      setFeedback('Correto!');
      setScoreUpdated(true);
      
      // Reset da animação da pontuação
      setTimeout(() => setScoreUpdated(false), 600);
    } else {
      setFeedback(`Incorreto! A resposta correta é ${current.scientificName}`);
    }
  }, [current, answered]);

  const getOptionClassName = useCallback((option: string) => {
    if (!answered) return styles.optionButton;
    
    if (option === current?.scientificName) {
      return `${styles.optionButton} ${styles.correct}`;
    }
    
    if (option === selectedOption && option !== current?.scientificName) {
      return `${styles.optionButton} ${styles.incorrect}`;
    }
    
    return styles.optionButton;
  }, [answered, current?.scientificName, selectedOption]);

  const getFeedbackClassName = useCallback(() => {
    const baseClass = styles.feedbackCard;
    if (feedback === 'Correto!') {
      return `${baseClass} ${styles.feedbackCorrect}`;
    }
    return `${baseClass} ${styles.feedbackIncorrect}`;
  }, [feedback]);

  return (
    <div className={`${styles.container} ${isLoading ? styles.loading : ''}`}>
      <div className={styles.header}>
        <button 
          className={styles.backButton}
          onClick={() => router.push('/')}
          aria-label="Voltar para a página inicial"
        >
          Início
        </button>
        
        <div className={styles.scoreContainer}>
          <div className={`${styles.score} ${scoreUpdated ? styles.updated : ''}`}>
            📊 Pontuação: {score}
          </div>
        </div>
      </div>

      {current && (
        <>
          <div className={styles.questionCard}>
            <div className={styles.questionTitle}>
              Qual é o nome científico para:
            </div>
            <p className={styles.questionText}>
              {current.commonName}
            </p>
          </div>

          <div className={styles.optionsGrid}>
            {options.map((option, index) => (
              <button 
                key={option}
                className={getOptionClassName(option)}
                onClick={() => handleAnswer(option)} 
                disabled={answered}
                aria-label={`Opção ${index + 1}: ${option}`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={getFeedbackClassName()}>
              <p className={styles.feedbackText}>
                {feedback}
              </p>
            </div>
          )}

          {answered && (
            <button 
              className={styles.nextButton}
              onClick={loadNewQuestion}
              aria-label="Avançar para a próxima pergunta"
            >
              Próxima Pergunta
            </button>
          )}
        </>
      )}
    </div>
  );
}
