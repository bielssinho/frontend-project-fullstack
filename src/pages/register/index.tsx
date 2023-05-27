import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, schema } from './validator'
import { useRegister } from '../../hooks/useRegister'
import { ToastContainer } from 'react-toastify'

const Register = () => {
    const { onSubmitRegister } = useRegister();
    const { register, handleSubmit } = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })

    return (
        <main>
            <h2>Cadastro</h2>

            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')} />

                <label htmlFor="cellphone">Cellphone</label>
                <input type="text" id="cellphone" {...register('cellphone')} />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register('password')} />

                <label htmlFor="profileImage">Profile Image</label>
                <input type="url" id="profileImage" {...register('profileImage')} />

                <button type="submit">Entrar</button>
            </form>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </main>
    )
}

export { Register }