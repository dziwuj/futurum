import React from 'react'
import '@/styles/Tag.scss'

interface TagProps {
    text: string
    onRemove?: () => void
}

const Tag: React.FC<TagProps> = ({ text, onRemove }) => {
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

export default Tag
