import { ReactNode, createContext } from 'react'
import { api } from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { RegisterData } from '../pages/register/validator.js'
import { toast } from 'react-toastify'

interface ResgisterProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    onSubmitRegister: (data: RegisterData) => void
}

const RegisterContext = createContext<AuthContextValues>({} as AuthContextValues);

const RegisterProvider = ({ children }: ResgisterProviderProps) => {
    const navigate = useNavigate();

    const onSubmitRegister = async (data: RegisterData) => {
        await api.post('users', data)
            .then((response) => {
                if (response.statusText === 'Created') {
                    navigate('/')
                }
            })
            .catch(() => toast.error('Ops! Algo deu errado'))
    }

    return (
        <RegisterContext.Provider value={{ onSubmitRegister }} >
            {children}
        </RegisterContext.Provider>
    )
}

export { RegisterContext, RegisterProvider }