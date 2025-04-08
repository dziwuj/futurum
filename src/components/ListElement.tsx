import { useState, type FC } from 'react'
import { CampaignData } from '@/types/types'
import { Icon } from '@/components/Icon'
import checkSvg from '@/assets/circle-check-solid.svg'
import xmarkSvg from '@/assets/circle-xmark-solid.svg'
import editSvg from '@/assets/pen-to-square-solid.svg'
import deleteSvg from '@/assets/trash-solid.svg'
import '@/styles/ListElement.scss'
import { Tag } from './Tag'
import { useStore } from '@/store/Root.store'
import { createPortal } from 'react-dom'
import { EditModal } from '@/components/EditModal'

interface ListElementProps {
    campaignData: CampaignData
}

export const ListElement: FC<ListElementProps> = ({ campaignData }) => {
    const { removeCampaign } = useStore()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleEdit = () => {
        setIsModalOpen(true)
    }

    return (
        <tr className="list-element">
            {createPortal(
                <EditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    campaignData={campaignData}
                />,
                document.body
            )}
            <td>{campaignData.id}</td>
            <td>{campaignData.campaignName}</td>
            <td>
                <div className="tag-container">
                    {campaignData.keywords.map((tag) => {
                        return <Tag key={tag} text={tag} />
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
                <button
                    type="button"
                    className="edit-button"
                    title="Edit"
                    onClick={handleEdit}
                >
                    <Icon src={editSvg} title="editSvg" size={32} />
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="delete-button"
                    title="Delete"
                    onClick={() => removeCampaign(campaignData.id)}
                >
                    <Icon src={deleteSvg} title="deleteSvg" size={32} />
                </button>
            </td>
        </tr>
    )
}
