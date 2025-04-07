import { useEffect, useState, type FC } from 'react'
import { useStore } from '@/store/Root.store'
import { CampaignData } from '@/types/types'
import TagInput from '@/components/TagSelect'

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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="campaignName">Campaign Name:</label>
                    <input
                        type="text"
                        id="campaignName"
                        name="campaignName"
                        required
                    />
                </div>
                <TagInput
                    key={selectedTags.length}
                    selectedTags={selectedTags}
                    predefinedTags={keywords}
                    setSelectedTags={setSelectedTags}
                />
                <div>
                    <label htmlFor="bidAmount">Bid amount:</label>
                    <input
                        type="number"
                        id="bidAmount"
                        name="bidAmount"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="campaignFund">Campaign fund:</label>
                    <input
                        type="number"
                        id="campaignFund"
                        name="campaignFund"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input type="checkbox" id="status" name="status" />
                </div>
                <div>
                    <label htmlFor="town">Town:</label>
                    <select id="town" name="town" defaultValue={'-'}>
                        <option value="-"></option>
                        {towns.map((town: string) => (
                            <option key={town} value={town}>
                                {town}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="radius">Radius:</label>
                    <input type="number" id="radius" name="radius" required />
                </div>
                <button type="submit">Add Campaign</button>
            </form>
        </>
    )
}
