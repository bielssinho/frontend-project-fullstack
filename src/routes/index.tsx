import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Register } from '../pages/register'


const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
            </Route>
        </Routes>
    )
}

export { RoutesMain }