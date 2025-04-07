import { CampaignList } from '@/components/CampaignList'
import { type FC } from 'react'
import '@/styles/CampaignsScreen.scss'

export const CampaignsScreen: FC = () => {
    return (
        <div className="campaigns-container">
            <h1 className="campaigns-title">Campaigns</h1>
            <CampaignList />
        </div>
    )
}
