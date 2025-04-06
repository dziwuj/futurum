import { type FC } from 'react'
import { Link, useLocation } from 'react-router'
import '@/styles/Header.scss'

const Header: FC = () => {
    const location = useLocation()
    const isActive = (path: string) =>
        location.pathname === path ? 'active' : ''

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
        </header>
    )
}

export default Header
