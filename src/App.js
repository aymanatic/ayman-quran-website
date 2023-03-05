import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Downloads from './components/Downloads'
import Donate from './components/Donate'

function App() {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/downloads" element={<Layout />}>
                    <Route index element={<Downloads />} />
                </Route>
                <Route path="/donate" element={<Layout />}>
                    <Route index element={<Donate />} />
                </Route>
            </Routes>
        </>
    )
}
export default App;