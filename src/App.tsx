import { Routes, Route, Navigate } from 'react-router'
import { Home, Campaign, AddCampaign } from '@/screens'
import Header from './components/Header'

import './App.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/campaigns" element={<Campaign />} />
                    <Route path="/addCampaign" element={<AddCampaign />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </main>
        </>
    )
}

export default App
