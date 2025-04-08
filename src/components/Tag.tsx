import { type FC } from 'react'
import { type TagProps } from '@/types/types'

import '@/styles/Tag.scss'

export const Tag: FC<TagProps> = ({ text, onRemove }) => {
    return (
        <div className="tag">
            <span>{text}</span>
            {onRemove && (
                <button
                    onClick={onRemove}
                    className="remove-button"
                    type="button"
                >
                    &times;
                </button>
            )}
        </div>
    )
}
