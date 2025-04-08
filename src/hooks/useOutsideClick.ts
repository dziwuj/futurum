import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            console.log(ref.current, event.target)
            if (
                ref.current &&
                !ref.current.contains(event.target as HTMLElement)
            ) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [ref, callback])

    return ref
}
