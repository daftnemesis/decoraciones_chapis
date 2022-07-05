import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PinatasPage } from '../pages/PinatasPage';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pinatas' element={<PinatasPage />} />
      </Routes>
    </>
  )
}
