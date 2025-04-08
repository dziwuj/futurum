import { type FC } from 'react'
import { useStore } from '@/store/Root.store'
import { ListElement } from './ListElement'

import '@/styles/CampaignList.scss'

export const CampaignList: FC = () => {
    const { campaignList } = useStore()

    return (
        <div className="campaign-list-table-container">
            {campaignList.length > 0 &&
            (<table className="campaign-list-table">
                <thead>
                    <tr>
                        {Object.keys(campaignList[0]).map((key) => (
                            <th key={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </th>
                        ))}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {campaignList.map((campaign, index) => (
                        <ListElement key={index} campaignData={campaign} />
                    ))}
                </tbody>
            </table>)}
        </div>
    )
}
