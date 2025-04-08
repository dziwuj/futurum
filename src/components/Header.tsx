import { type FC } from 'react'
import { Link, useLocation } from 'react-router'
import { useStore } from '@/store/Root.store'
import { Icon } from '@/components/Icon'
import PlusIcon from '@/assets/circle-plus-solid.svg'
import '@/styles/Header.scss'

const Header: FC = () => {
    const location = useLocation()
    const isActive = (path: string) =>
        location.pathname === path ? 'active' : ''

    const { emeraldFunds, setEmeraldFunds } = useStore()

    return (
        <header>
            <nav>
                <Link to="/" className={isActive('/')}>
                    Home
                </Link>
                <Link to="/campaigns" className={isActive('/campaigns')}>
                    Campaigns
                </Link>
                <Link to="/addCampaign" className={isActive('/addCampaign')}>
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
