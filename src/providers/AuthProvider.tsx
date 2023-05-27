import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { LoginData } from '../pages/login/validator'

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("your-contacts:token")

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)

            const { token } = response.data

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("your-todolist:token", token)

            navigate('dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }