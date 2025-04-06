import { CampaignData } from '@/types/types'

// Pre-populated dropdown list of towns
export const towns: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
]

// Pre-populated list of keywords
export const keywords: string[] = [
    'summer',
    'sale',
    'discount',
    'winter',
    'clearance',
    'offers',
    'spring',
    'festival',
    'celebration',
]

// Minimum bid amount
export const MIN_BID_AMOUNT = 5.0

// Mock data for campaign-related information

export const mockCampaignData: CampaignData[] = [
    {
        campaignName: 'Summer Sale Campaign',
        keywords: ['summer', 'sale', 'discount'],
        bidAmount: 5.0,
        campaignFund: 100.0,
        status: 'on',
        town: 'New York',
        radius: 10,
    },
    {
        campaignName: 'Winter Clearance',
        keywords: ['winter', 'clearance', 'offers'],
        bidAmount: 7.5,
        campaignFund: 200.0,
        status: 'off',
        town: 'Los Angeles',
        radius: 15,
    },
    {
        campaignName: 'Spring Festival',
        keywords: ['spring', 'festival', 'celebration'],
        bidAmount: 10.0,
        campaignFund: 300.0,
        status: 'on',
        town: 'Chicago',
        radius: 20,
    },
]
