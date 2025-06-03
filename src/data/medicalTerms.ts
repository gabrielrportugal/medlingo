export type MedicalTerm = {
  commonName: string;
  scientificName: string;
  distractors: string[];
};

export const medicalTerms: MedicalTerm[] = [
  {
    commonName: "Gripe",
    scientificName: "Influenza",
    distractors: ["Faringite", "Bronquite", "Pneumonia", "Rinite"],
  },
  {
    commonName: "Dor de cabeça",
    scientificName: "Cefaleia",
    distractors: ["Mialgia", "Gastrite", "Nefrite", "Artrite"],
  },
  {
    commonName: "Azia",
    scientificName: "Dispepsia",
    distractors: ["Hérnia", "Gastrite", "Hepatite", "Enterite"],
  },
  {
    commonName: "Cólica renal",
    scientificName: "Nefrolitíase",
    distractors: ["Cistite", "Nefrite", "Colelitíase", "Uretrite"],
  },
  {
    commonName: "Catapora",
    scientificName: "Varicela",
    distractors: ["Sarampo", "Rubéola", "Escarlatina", "Herpes"],
  },
  {
    commonName: "Pressão alta",
    scientificName: "Hipertensão",
    distractors: ["Arritmia", "Hipotensão", "Insuficiência renal", "Diabetes"],
  },
  {
    commonName: "Pressão baixa",
    scientificName: "Hipotensão",
    distractors: ["Hipertensão", "Anemia", "Desidratação", "Isquemia"],
  },
  {
    commonName: "Derrame",
    scientificName: "Acidente Vascular Cerebral",
    distractors: ["Infarto", "Aneurisma", "Trombose", "Isquemia cerebral"],
  },
  {
    commonName: "Infarto",
    scientificName: "Infarto Agudo do Miocárdio",
    distractors: ["AVC", "Arritmia", "Angina", "Pericardite"],
  },
  {
    commonName: "Câncer de pele",
    scientificName: "Carcinoma Basocelular",
    distractors: ["Melanoma", "Psoríase", "Lúpus", "Eczema"],
  },
  {
    commonName: "Piolho",
    scientificName: "Pediculose",
    distractors: ["Escabiose", "Micose", "Dermatite", "Furunculose"],
  },
  {
    commonName: "Sarampo",
    scientificName: "Morbilli",
    distractors: ["Varicela", "Caxumba", "Rubeóla", "Escarlatina"],
  },
  {
    commonName: "Caxumba",
    scientificName: "Parotidite",
    distractors: ["Tonsilite", "Sinusite", "Rinite", "Gengivite"],
  },
  {
    commonName: "Coceira",
    scientificName: "Prurido",
    distractors: ["Eczema", "Psoríase", "Urticária", "Dermatite"],
  },
  {
    commonName: "Verruga",
    scientificName: "Papiloma",
    distractors: ["Calosidade", "Cisto", "Lipoma", "Nevo"],
  },
  {
    commonName: "Bronquite",
    scientificName: "Inflamação dos Brônquios",
    distractors: ["Asma", "Pneumonia", "Rinite", "Sinusite"],
  },
  {
    commonName: "Cálculo biliar",
    scientificName: "Colelitíase",
    distractors: ["Nefrolitíase", "Pancreatite", "Gastrite", "Hepatite"],
  },
  {
    commonName: "Gastrite",
    scientificName: "Inflamação da Mucosa Gástrica",
    distractors: ["Refluxo", "Úlcera", "Hérnia", "Colite"],
  },
  {
    commonName: "Refluxo",
    scientificName: "Doença do Refluxo Gastroesofágico",
    distractors: ["Gastrite", "Úlcera", "Esôfagite", "Colite"],
  },
  {
    commonName: "Apendicite",
    scientificName: "Inflamação do Apêndice Vermiforme",
    distractors: ["Gastrite", "Colite", "Pancreatite", "Diverticulite"],
  },
  {
    commonName: "Febre amarela",
    scientificName: "Flavivírus da Febre Amarela",
    distractors: ["Zika", "Dengue", "Chikungunya", "Malária"],
  },
  {
    commonName: "Raiva",
    scientificName: "Hidrofobia",
    distractors: ["Leptospirose", "Tétano", "Encefalite", "Herpes"],
  },
  {
    commonName: "Bicho geográfico",
    scientificName: "Larva Migrans Cutânea",
    distractors: ["Escabiose", "Filariose", "Pediculose", "Leishmaniose"],
  },
  {
    commonName: "Frieira",
    scientificName: "Tinea Pedis",
    distractors: ["Micose", "Eczema", "Psoríase", "Onicomicose"],
  },
  {
    commonName: "Virose intestinal",
    scientificName: "Gastroenterite Viral",
    distractors: ["Salmonelose", "Disenteria", "Amebíase", "Giardíase"],
  }
];
