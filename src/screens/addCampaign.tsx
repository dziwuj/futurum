import { useEffect, useState, type FC } from 'react'
import { useStore } from '@/store/Root.store'
import { CampaignData } from '@/types/types'
import TagInput from '@/components/TagSelect'
import Tag from '@/components/Tag'

export const AddCampaignScreen: FC = () => {
    const { towns, keywords } = useStore()
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    useEffect(() => {
        // This effect runs when selectedTags changes
        console.log('Selected tags:', selectedTags)
    }, [selectedTags])
    return (
        <>
            <form>
                <div>
                    <label htmlFor="campaignName">Campaign Name:</label>
                    <input type="text" id="campaignName" name="campaignName" />
                </div>
                <TagInput
                    predefinedTags={keywords}
                    setSelectedTags={setSelectedTags}
                />
                <div>
                    <label htmlFor="bidAmount">Bid amount:</label>
                    <input type="number" id="bidAmount" name="bidAmount" />
                </div>
                <div>
                    <label htmlFor="campaignFund">Campaign fund:</label>
                    <input
                        type="number"
                        id="campaignFund"
                        name="campaignFund"
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
                    <input type="number" id="radius" name="radius" />
                </div>
                <button type="submit">Add Campaign</button>
            </form>
        </>
    )
}
