
export interface ResourceLink {
  label: string;
  url: string;
}

export interface ClassEntry {
  id: string;
  date: string;
  topic: string;
  youtubeLink: string;
  notesLink: string;
  homework?: string;
  practice?: ResourceLink[];
}

export interface ResourceItem {
  title: string;
  url: string;
  type: 'article' | 'video' | 'practice' | 'guide';
}

export interface AppData {
  instructor: {
    name: string;
    tagline: string;
    about: string;
    email: string;
    youtubeChannel: string;
  };
  classes: ClassEntry[];
  resources: {
    java: ResourceItem[];
    python: ResourceItem[];
  };
}
