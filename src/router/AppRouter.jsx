import React from 'react'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import {  Route, Routes } from 'react-router-dom';
import { JornalRoutes } from '../journal/routes/JornalRoutes';

export const AppRouter = () => {
  return (
   <Routes>
    {/* login y registro */}
    <Route  path='/auth/*' element={<AuthRoutes/>}/>
    {/* JournalApp */}
    <Route path='/*' element={<JornalRoutes />} />

   </Routes>
  )
}
