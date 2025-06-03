import { getRandomTerm } from '../utils/quizLogic';
import { medicalTerms } from '../data/medicalTerms';

test('returns a different term from the last one', () => {
  const last = medicalTerms[0];
  const newTerm = getRandomTerm(medicalTerms, last);
  expect(newTerm.commonName).not.toBe(last.commonName);
});