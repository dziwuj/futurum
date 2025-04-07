import { create } from 'zustand'
import { mockCampaignData, towns, keywords } from '@/constants/mockData'
import { CampaignData } from '@/types/types'

type Store = {
    campaignList: CampaignData[]
    setCampaignList: (campaignList: CampaignData[]) => void
    addCampaign: (campaign: CampaignData) => void
    removeCampaign: (id: number) => void
    updateCampaign: (updatedCampaign: CampaignData) => void
    towns: string[]
    keywords: string[]
}

const useStore = create<Store>()((set) => ({
    campaignList: mockCampaignData,
    setCampaignList: (campaignList) => set({ campaignList }),
    addCampaign: (campaign) =>
        set((state) => ({ campaignList: [...state.campaignList, campaign] })),
    removeCampaign: (id) =>
        set((state) => ({
            campaignList: state.campaignList.filter(
                (campaign) => campaign.id !== id
            ),
        })),
    updateCampaign: (updatedCampaign) =>
        set((state) => ({
            campaignList: state.campaignList.map((campaign) =>
                campaign.id === updatedCampaign.id ? updatedCampaign : campaign
            ),
        })),
    towns: towns,
    keywords: keywords,
}))

export { useStore, type Store }
