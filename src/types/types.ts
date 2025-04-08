export interface CampaignData {
    id: number
    campaignName: string
    keywords: string[]
    bidAmount: number
    campaignFund: number
    status: 'on' | 'off'
    town: string[number]
    radius: number // In kilometers
}

export interface EditModalProps {
    isOpen: boolean
    onClose: () => void
    campaignData: CampaignData
}

export interface IconProps {
    src: string
    title: string
    size?: number
}

export interface ListElementProps {
    campaignData: CampaignData
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export interface TagProps {
    text: string
    onRemove?: () => void
}

export interface TagSelectProps {
    predefinedTags: string[]
    selectedTags?: string[]
    setSelectedTags: (tags: string[]) => void
}

export type Store = {
    campaignList: CampaignData[]
    setCampaignList: (campaignList: CampaignData[]) => void
    addCampaign: (campaign: CampaignData) => void
    removeCampaign: (id: number) => void
    updateCampaign: (updatedCampaign: CampaignData) => void
    towns: string[]
    keywords: string[]
    minBidAmount: number
    emeraldFunds: number
    setEmeraldFunds: (newFunds: number) => void
}
