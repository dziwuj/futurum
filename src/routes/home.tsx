import { type FC } from 'react'
import '@/styles/Home.scss'

export const Home: FC = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">
                Welcome to the Campaign Management System
            </h1>
            <p className="home-description">
                This is a simple application to manage your advertising
                campaigns. You can view, add, and manage your campaigns easily.
            </p>
            <p className="home-instruction">
                Use the navigation menu to get started!
            </p>
        </div>
    )
}
