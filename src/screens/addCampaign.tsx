import { ChangeEvent, useState, type FC } from 'react'
import { useStore } from '@/store/Root.store'
import { CampaignData } from '@/types/types'
import { TagSelect } from '@/components/TagSelect'
import '@/styles/AddCampaignScreen.scss'
import { DecimalInput } from '@/components/DecimalInput'

export const AddCampaignScreen: FC = () => {
    const {
        towns,
        keywords,
        minBidAmount,
        emeraldFunds,
        addCampaign,
        setEmeraldFunds,
    } = useStore()
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [bidAmount, setBidAmount] = useState<number>(minBidAmount)
    const [campaignFund, setCampaignFund] = useState<number>(emeraldFunds)

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
            id: Math.floor(Math.random() * 1000000),
            campaignName,
            keywords: selectedTags,
            bidAmount: bidAmount,
            campaignFund: campaignFund,
            status: status === 'on' ? 'on' : 'off',
            town,
            radius: Number(radius),
        }

        addCampaign(newCampaign)

        const updatedEmeraldFunds = emeraldFunds - Number(campaignFund)
        setEmeraldFunds(updatedEmeraldFunds)

        setSelectedTags([])
        e.currentTarget.reset()
        alert(
            `Campaign "${campaignName}" added successfully! Remaining Emerald Funds: $${updatedEmeraldFunds}`
        )
    }

    return (
        <div className="add-campaign-form-container">
            <form onSubmit={handleSubmit} className="add-campaign-form">
                <div className="add-campaign-form-group">
                    <label htmlFor="campaignName">Campaign name:</label>
                    <input
                        className="add-campaign-form-input"
                        type="text"
                        id="campaignName"
                        name="campaignName"
                        placeholder="Enter campaign name"
                        required
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="keywords">Keywords:</label>
                    <TagSelect
                        key={selectedTags.length}
                        selectedTags={selectedTags}
                        predefinedTags={keywords}
                        setSelectedTags={setSelectedTags}
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="bidAmount">Bid amount:</label>
                    <DecimalInput
                        className="add-campaign-form-input"
                        id="bidAmount"
                        name="bidAmount"
                        placeholder={`Enter bid amount (min $${
                            minBidAmount > 0 ? minBidAmount : 0
                        })`}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setBidAmount(Number(e.target.value))
                            const value = Number(e.target.value)

                            if (value < minBidAmount)
                                e.target.value = minBidAmount.toString()
                            else if (value < 0) e.target.value = '0'
                        }}
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="campaignFund">Campaign fund:</label>
                    <DecimalInput
                        className="add-campaign-form-input"
                        id="campaignFund"
                        name="campaignFund"
                        placeholder={`Enter campaign fund (max $${emeraldFunds})`}
                        required
                        min={0}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            //max value is emeraldFunds
                            const value = Number(e.target.value)
                            if (value > emeraldFunds)
                                e.target.value = emeraldFunds.toString()
                            else if (value < 0) e.target.value = '0'

                            setCampaignFund(Number(e.target.value))
                        }}
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="status">
                        Status (Is campaign going on at the moment?):
                    </label>
                    <input
                        className="add-campaign-form-input"
                        type="checkbox"
                        id="status"
                        name="status"
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="town">Town (optional):</label>
                    <select
                        className="add-campaign-form-input"
                        id="town"
                        name="town"
                        defaultValue={'-'}
                    >
                        <option value="-"></option>
                        {towns.map((town: string) => (
                            <option key={town} value={town}>
                                {town}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="radius">Radius (in km):</label>
                    <input
                        className="add-campaign-form-input"
                        type="number"
                        id="radius"
                        name="radius"
                        placeholder="Enter radius"
                        required
                    />
                </div>
                <button type="submit" className="add-campaign-form-button">
                    Add Campaign
                </button>
            </form>
        </div>
    )
}
