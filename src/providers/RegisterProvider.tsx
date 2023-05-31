import { ReactNode, createContext } from 'react'
import { api } from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { RegisterData } from '../pages/register/validator.js'
// import { toast } from 'react-toastify'

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

        try {
            const response = await api.post('users', data)

            if (response.status === 201) {
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <RegisterContext.Provider value={{ onSubmitRegister }} >
            {children}
        </RegisterContext.Provider>
    )
}

export { RegisterContext, RegisterProvider }