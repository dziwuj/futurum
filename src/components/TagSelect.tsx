import React, { RefObject, useEffect, useState, type FC } from 'react'
import Tag from './Tag'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import '@/styles/TagSelect.scss'

interface TagSelectProps {
    predefinedTags: string[]
    setSelectedTags: (tags: string[]) => void
}

const TagSelect: FC<TagSelectProps> = ({ predefinedTags, setSelectedTags }) => {
    const [tags, setTags] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState<string[]>(predefinedTags)
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

    const inputRef = useOutsideClick(() => {
        setShowSuggestions(false)
    })

    useEffect(() => {
        setSelectedTags(tags)
    }, [tags, setSelectedTags])

    useEffect(() => {
        setSuggestions(predefinedTags.filter((tag) => !tags.includes(tag)))
    }, [predefinedTags, tags])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowSuggestions(true)
        const value = e.target.value
        setInputValue(value)

        if (value) {
            const filteredSuggestions = predefinedTags.filter(
                (tag) =>
                    tag.toLowerCase().startsWith(value.toLowerCase()) &&
                    !tags.includes(tag)
            )
            setSuggestions(filteredSuggestions)
        } else {
            setSuggestions(predefinedTags.filter((tag) => !tags.includes(tag)))
        }
    }

    const handleAddTag = (tag: string) => {
        setShowSuggestions(false)
        if (!tags.includes(tag)) {
            setTags((prev) => [...prev, tag])
            setInputValue('')
        }
    }

    const handleRemoveTag = (tag: string) => {
        setTags((prev) => prev.filter((t) => t !== tag))
        setSuggestions((prev) => [...prev, tag])
    }

    return (
        <div
            ref={inputRef as RefObject<HTMLDivElement>}
            className="tag-select-container"
        >
            {tags.map((tag) => (
                <Tag
                    key={tag}
                    text={tag}
                    onRemove={() => handleRemoveTag(tag)}
                />
            ))}
            <div className="tag-select-input-container">
                <input
                    className="tag-select-input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Type to search tags..."
                />

                {showSuggestions && (
                    <ul className="suggestions-list">
                        {suggestions.length > 0
                            ? suggestions.map((suggestion) => (
                                  <li
                                      key={suggestion}
                                      onClick={() => handleAddTag(suggestion)}
                                      className="suggestions-item"
                                  >
                                      {suggestion}
                                  </li>
                              ))
                            : !tags.includes(inputValue) &&
                              inputValue && (
                                  <li
                                      className="suggestions-item"
                                      onClick={() => handleAddTag(inputValue)}
                                  >
                                      Add "{inputValue}"
                                  </li>
                              )}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default TagSelect
