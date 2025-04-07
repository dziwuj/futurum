// import { useStore } from './store/Root.store'
import './App.css'
import Header from './components/Header'
import { Routes, Route, Navigate } from 'react-router'
import { Home, Campaign, AddCampaign } from '@/screens'

function App() {
    // const { count, inc } = useStore()

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
