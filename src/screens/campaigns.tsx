import { CampaignList } from '@/components/CampaignList'
import { type FC } from 'react'
import '@/styles/CampaignsScreen.scss'

export const CampaignsScreen: FC = () => {
    return (
        <div className="campaigns-container">
            <CampaignList />
        </div>
    )
}
