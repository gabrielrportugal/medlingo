import { MedicalTerm } from '../data/medicalTerms';

export function getRandomTerm(terms: MedicalTerm[], lastTerm: MedicalTerm | null): MedicalTerm {
  let filtered = terms.filter(t => t.commonName !== lastTerm?.commonName);
  return filtered[Math.floor(Math.random() * filtered.length)];
}