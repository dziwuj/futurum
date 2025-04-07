import { type FC } from 'react'
import { CampaignData } from '@/types/types'
import { Icon } from '@/components/Icon'
import checkSvg from '@/assets/circle-check-solid.svg'
import xmarkSvg from '@/assets/circle-xmark-solid.svg'
import editSvg from '@/assets/pen-to-square-solid.svg'
import deleteSvg from '@/assets/trash-solid.svg'
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
            <td>
                {campaignData.status === 'on' ? (
                    <Icon src={checkSvg} title="checkSvg" size={32} />
                ) : (
                    <Icon src={xmarkSvg} title="xmarkSvg" size={32} />
                )}
            </td>
            <td>{campaignData.town}</td>
            <td>{campaignData.radius} km</td>
            <td>
                <Icon src={editSvg} title="editSvg" size={32} />
            </td>
            <td>
                <Icon src={deleteSvg} title="deleteSvg" size={32} />
            </td>
        </tr>
    )
}
