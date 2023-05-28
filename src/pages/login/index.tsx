import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginData, schema } from './validator'
import { useAuth } from '../../hooks/useAuth'
import { ToastContainer } from 'react-toastify'
import { Button, Container, Form, Input, Label, Title } from './styles'
import { StyledLink } from '../register/styles'

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    return (
        <Container>
            <Title>Login</Title>

            <Form onSubmit={handleSubmit(signIn)}>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" {...register('email')} />

                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" {...register('password')} />

                <Button type="submit">Entrar</Button>
            </Form>
            <StyledLink to={'/register'}>Register Page</StyledLink>
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
        </Container>
    )
}

export { Login }