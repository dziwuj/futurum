import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as HTMLElement)
            ) {
                callback()
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ref, callback])

    return ref
}
