import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { ProtectedRoutes } from './ProtectedRoutes'


const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
            </Route>
        </Routes>
    )
}

export { RoutesMain }