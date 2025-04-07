import { type FC } from 'react'

interface IconProps {
    src: string
    title: string
    size?: number
}

export const Icon: FC<IconProps> = ({ src, title, size }) => {
    return <img src={src} title={title} width={size} height={size} />
}
