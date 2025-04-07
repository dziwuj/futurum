export interface CampaignData {
    id: number
    campaignName: string
    keywords: string[] // Array of keywords
    bidAmount: number
    campaignFund: number
    status: 'on' | 'off'
    town: string[number]
    radius: number // In kilometers
}
