import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Theme {
  name: string;
  bgCode: string;
  colorCode: string;
  iconCode?: string;
  bgPartialTransparency?: string;
  borderColor?: string;
  activeMenuColor?: string;
}

interface LocaleStore {
  locale: string;
  setLocale: (newLocale: string) => void;

  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface LocaleStore {
  locale: string;
  setLocale: (newLocale: string) => void;

  //Theme
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

// @ts-ignore
const useLocaleStore = create<LocaleStore>(devtools(persist((set) => ({
  locale: 'en', // Initial locale
  setLocale: (newLocale: string) => set({ locale: newLocale }),

  // Initial theme
  theme: {
    name: 'light',
    bgCode: '#fff',
    colorCode: '#000',
    iconCode: '#000',
    // bgPartialTransparency:'#ffffffb4',
    bgPartialTransparency:"#ffffffF2",
    borderColor: "#8080808a",
    // activeMenuColor: "#0000007A"
    activeMenuColor:"#EEA21B"

  },
  setTheme: (newTheme: Theme) => set({ theme: newTheme }),
}),
  {
    name: 'locale-store', // Unique name for the store
  }
)
)
);

export default useLocaleStore;

