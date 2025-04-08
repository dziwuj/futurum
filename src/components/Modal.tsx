import { type FC, ReactNode } from 'react'
import '@/styles/Modal.scss'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}
