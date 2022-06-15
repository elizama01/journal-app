import { JournalPage } from '../pages/JournalPage'
import { Route, Routes, Navigate } from 'react-router-dom'
export const JornalRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<JournalPage />} />
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
