export interface HajoService {
  id: string;
  title: string;
  swahiliTitle: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
}

export interface HajoProject {
  id: string;
  title: string;
  location: string;
  category: 'civil' | 'building' | 'roads' | 'water';
  year: string;
  status: 'Tarura' | 'Acacia' | 'AnglogoldAshanti' | 'HAJOKA' ;
  image: string;
  image2: string;
  image3: string;
  video: string;
  scope: string[];
}

export interface HajoMilestone {
  year: string;
  title: string;
  swahiliTitle: string;
  description: string;
}
