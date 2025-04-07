import { useState, type FC } from 'react'
import { useStore } from '@/store/Root.store'
import { CampaignData } from '@/types/types'
import TagInput from '@/components/TagSelect'
import '@/styles/AddCampaignScreen.scss'

export const AddCampaignScreen: FC = () => {
    const { towns, keywords, addCampaign } = useStore()
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const campaignName = formData.get('campaignName') as string
        const bidAmount = formData.get('bidAmount') as string
        const campaignFund = formData.get('campaignFund') as string
        const status = formData.get('status') as string
        const town = formData.get('town') as string
        const radius = formData.get('radius') as string
        const newCampaign: CampaignData = {
            id: Math.floor(Math.random() * 1000000),
            campaignName,
            keywords: selectedTags,
            bidAmount: Number(bidAmount),
            campaignFund: Number(campaignFund),
            status: status === 'on' ? 'on' : 'off',
            town,
            radius: Number(radius),
        }
        addCampaign(newCampaign)
        console.log('New campaign data:', newCampaign)

        setSelectedTags([])
        e.currentTarget.reset()
    }

    return (
        <div className="add-campaign-form-container">
            <form onSubmit={handleSubmit} className="add-campaign-form">
                <div className="add-campaign-form-group">
                    <label htmlFor="campaignName">Campaign Name:</label>
                    <input
                        className="add-campaign-form-input"
                        type="text"
                        id="campaignName"
                        name="campaignName"
                        required
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="keywords">Keywords:</label>
                    <TagInput
                        key={selectedTags.length}
                        selectedTags={selectedTags}
                        predefinedTags={keywords}
                        setSelectedTags={setSelectedTags}
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="bidAmount">Bid amount:</label>
                    <input
                        className="add-campaign-form-input"
                        type="number"
                        id="bidAmount"
                        name="bidAmount"
                        required
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="campaignFund">Campaign fund:</label>
                    <input
                        className="add-campaign-form-input"
                        type="number"
                        id="campaignFund"
                        name="campaignFund"
                        required
                    />
                </div>
                <div className="add-campaign-form-group">
                    <label htmlFor="status">Status:</label>
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
