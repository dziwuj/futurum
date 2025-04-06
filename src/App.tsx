// import { useStore } from './store/Root.store'
import './App.css'
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router'
import { Home, Campaigns, AddCampaign } from '@/routes'

function App() {
    // const { count, inc } = useStore()

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campaigns" element={<Campaigns />} />
                    <Route path="/addCampaign" element={<AddCampaign />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </main>
        </>
    )
}

export default App
