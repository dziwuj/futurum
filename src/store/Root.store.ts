import { create } from 'zustand'
import { mockCampaignData } from '@/constants/mockData'
import { CampaignData } from '@/types/types'

type Store = {
    count: number
    campaignList: CampaignData[]
    setCampaignList: (campaignList: CampaignData[]) => void
    inc: () => void
}

const useStore = create<Store>()((set) => ({
    count: 1,
    campaignList: mockCampaignData,
    setCampaignList: (campaignList) => set({ campaignList }),
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

export { useStore, type Store }
