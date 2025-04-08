import { useState, type FC } from 'react'
import { CampaignData } from '@/types/types'
import '@/styles/EditModal.scss'
import { useStore } from '@/store/Root.store'
import { Modal } from '@/components/Modal'
import { TagSelect } from '@/components/TagSelect'
import { DecimalInput } from '@/components/DecimalInput'

interface EditModalProps {
    isOpen: boolean
    onClose: () => void
    campaignData: CampaignData
}

export const EditModal: FC<EditModalProps> = ({
    isOpen,
    onClose,
    campaignData,
}) => {
    const {
        towns,
        keywords,
        minBidAmount,
        emeraldFunds,
        updateCampaign,
        setEmeraldFunds,
    } = useStore()

    const [selectedTags, setSelectedTags] = useState<string[]>(
        campaignData.keywords
    )
    const [bidAmount, setBidAmount] = useState<number>(minBidAmount)
    const [campaignFund, setCampaignFund] = useState<number>(
        campaignData.campaignFund
    )

    const startingFund = campaignData.campaignFund

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!selectedTags.length) {
            alert('Please select at least one keyword.')
            return
        }
        const formData = new FormData(e.currentTarget)
        const campaignName = formData.get('campaignName') as string
        const status = formData.get('status') as string
        const town = formData.get('town') as string
        const radius = formData.get('radius') as string
        const newCampaign: CampaignData = {
            id: campaignData.id,
            campaignName,
            keywords: selectedTags,
            bidAmount: bidAmount,
            campaignFund: emeraldFunds,
            status: status === 'on' ? 'on' : 'off',
            town,
            radius: Number(radius),
        }

        console.log(newCampaign)

        updateCampaign(newCampaign)

        const updatedEmeraldFunds =
            emeraldFunds - (Number(campaignFund) - startingFund)

        console.log(
            emeraldFunds,
            startingFund,
            campaignFund,
            updatedEmeraldFunds
        )
        setEmeraldFunds(updatedEmeraldFunds)

        alert(
            `Campaign "${campaignName}" updated successfully! Remaining Emerald Funds: $${updatedEmeraldFunds}`
        )
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="modal-content">
                    <h2>Edit Campaign</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="edit-campaign-form"
                    >
                        <div className="edit-campaign-form-group">
                            <label htmlFor="campaignName">Campaign name:</label>
                            <input
                                className="edit-campaign-form-input"
                                type="text"
                                id="campaignName"
                                name="campaignName"
                                placeholder="Enter campaign name"
                                required
                                defaultValue={campaignData.campaignName}
                            />
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="keywords">Keywords:</label>
                            <TagSelect
                                key={selectedTags.length}
                                selectedTags={selectedTags}
                                predefinedTags={keywords}
                                setSelectedTags={setSelectedTags}
                            />
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="bidAmount">Bid amount:</label>
                            <DecimalInput
                                className="edit-campaign-form-input"
                                id="bidAmount"
                                name="bidAmount"
                                placeholder={`Enter bid amount (min $${
                                    minBidAmount > 0 ? minBidAmount : 0
                                })`}
                                defaultValue={campaignData.bidAmount}
                                required
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    setBidAmount(Number(e.target.value))
                                    const value = Number(e.target.value)

                                    if (value < minBidAmount)
                                        e.target.value = minBidAmount.toString()
                                    else if (value < 0) e.target.value = '0'
                                }}
                            />
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="campaignFund">Campaign fund:</label>
                            <DecimalInput
                                className="edit-campaign-form-input"
                                id="campaignFund"
                                name="campaignFund"
                                placeholder={`Enter campaign fund (max $${emeraldFunds})`}
                                required
                                min={0}
                                defaultValue={campaignData.campaignFund}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    //max value is emeraldFunds
                                    const value = Number(e.target.value)
                                    if (value > emeraldFunds)
                                        e.target.value = emeraldFunds.toString()
                                    else if (value < 0) e.target.value = '0'

                                    setCampaignFund(Number(e.target.value))
                                }}
                            />
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="status">
                                Status (Is campaign going on at the moment?):
                            </label>
                            <input
                                className="edit-campaign-form-input"
                                type="checkbox"
                                id="status"
                                name="status"
                                defaultChecked={
                                    campaignData.status === 'on' ? true : false
                                }
                            />
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="town">Town (optional):</label>
                            <select
                                className="edit-campaign-form-input"
                                id="town"
                                name="town"
                                defaultValue={campaignData.town}
                            >
                                <option value="-"></option>
                                {towns.map((town: string) => (
                                    <option key={town} value={town}>
                                        {town}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="edit-campaign-form-group">
                            <label htmlFor="radius">Radius (in km):</label>
                            <input
                                className="edit-campaign-form-input"
                                type="number"
                                id="radius"
                                name="radius"
                                placeholder="Enter radius"
                                required
                                defaultValue={campaignData.radius}
                            />
                        </div>
                        <button
                            type="submit"
                            className="edit-campaign-form-button"
                        >
                            Edit Campaign
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    )
}
