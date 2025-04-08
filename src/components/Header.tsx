import { useState, type FC } from 'react'
import { Link, useLocation } from 'react-router'
import { useStore } from '@/store/Root.store'
import { Icon } from '@/components/Icon'

import PlusIcon from '@/assets/circle-plus-solid.svg'
import Burger from '@/assets/bars-solid.svg'

import '@/styles/Header.scss'

const Header: FC = () => {
    const location = useLocation()
    const isActive = (path: string) =>
        location.pathname === path ? 'active' : ''

    const { emeraldFunds, setEmeraldFunds } = useStore()
    const [showNav, setShowNav] = useState<boolean>(false)

    return (
        <header className={showNav ? 'nav-open' : ''}>
            <div className="burger-container">
                <button
                    type="button"
                    className="burger-button"
                    title="Menu"
                    onClick={() => setShowNav(!showNav)}
                >
                    <Icon title="Navigaion" src={Burger} size={30} />
                </button>
            </div>
            <nav>
                <Link
                    to="/"
                    className={isActive('/')}
                    onClick={() => setShowNav(false)}
                >
                    Home
                </Link>
                <Link
                    to="/campaigns"
                    className={isActive('/campaigns')}
                    onClick={() => setShowNav(false)}
                >
                    Campaigns
                </Link>
                <Link
                    to="/addCampaign"
                    className={isActive('/addCampaign')}
                    onClick={() => setShowNav(false)}
                >
                    Add Campaign
                </Link>
            </nav>
            <div className="emerald-funds">
                <span className="emerald-funds-title">
                    <b>Emerald Funds:</b>{' '}
                </span>
                <span className="emerald-funds-amount">${emeraldFunds}</span>
                <button
                    type="button"
                    title="Add funds"
                    className="add-funds-button"
                    onClick={() => {
                        setEmeraldFunds(emeraldFunds + 1000)
                        alert('Added $1000 to Emerald Funds')
                    }}
                >
                    <Icon src={PlusIcon} title="Add $1000" size={18} />
                </button>
            </div>
        </header>
    )
}

export default Header
