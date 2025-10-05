import { create } from 'zustand';

export type TabType = 'category' | 'monthly' | 'calendar';

interface TabStore {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: 'category',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
