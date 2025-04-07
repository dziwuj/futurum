import { type FC } from 'react'
import { CampaignData } from '@/types/types'
import '@/styles/ListElement.scss'

interface ListElementProps {
    campaignData: CampaignData
}

export const ListElement: FC<ListElementProps> = ({ campaignData }) => {
    return (
        <tr className="list-element">
            <td>{campaignData.id}</td>
            <td>{campaignData.campaignName}</td>
            <td>
                <div className="tag-container">
                    {campaignData.keywords.map((tag) => {
                        return (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        )
                    })}
                </div>
            </td>
            <td>${campaignData.bidAmount.toFixed(2)}</td>
            <td>${campaignData.campaignFund.toFixed(2)}</td>
            <td>{campaignData.status}</td>
            <td>{campaignData.town}</td>
            <td>{campaignData.radius} km</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}
