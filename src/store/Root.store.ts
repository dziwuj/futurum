import { create } from 'zustand'
import { mockCampaignData, towns, keywords } from '@/constants/mockData'
import { CampaignData } from '@/types/types'

type Store = {
    campaignList: CampaignData[]
    setCampaignList: (campaignList: CampaignData[]) => void
    towns: string[]
    keywords: string[]
}

const useStore = create<Store>()((set) => ({
    campaignList: mockCampaignData,
    setCampaignList: (campaignList) => set({ campaignList }),
    towns: towns,
    keywords: keywords,
}))

export { useStore, type Store }
