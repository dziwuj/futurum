import { type FC } from 'react'
import { type IconProps } from '@/types/types'

export const Icon: FC<IconProps> = ({ src, title, size }) => {
    return <img src={src} title={title} width={size} height={size} />
}
