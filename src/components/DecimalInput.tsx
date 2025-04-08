import { type FC } from 'react'

export const DecimalInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    const { onChange, ...rest } = props

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e)
        }
        const val = e.target.value

        if (val === '' || /^\d*\.?\d{0,2}$/.test(val)) {
            e.target.value = val
        }

        e.target.value = e.target.value.replace(',', '.')
    }

    return (
        <input
            type="text"
            inputMode="decimal"
            onChange={handleChange}
            {...rest}
        />
    )
}
