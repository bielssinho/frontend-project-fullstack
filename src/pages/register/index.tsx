import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, schema } from './validator'
import { useRegister } from '../../hooks/useRegister'
import { ToastContainer } from 'react-toastify'
import { Button, Container, Form, Input, Label, StyledLink, Title } from './styles'

const Register = () => {
    const { onSubmitRegister } = useRegister();
    const { register, handleSubmit } = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })

    return (
        <Container>
            <Title>Cadastro</Title>

            <Form onSubmit={handleSubmit(onSubmitRegister)}>
                <Label htmlFor="name">Name</Label >
                <Input type="text" id="name" {...register('name')} />

                <Label htmlFor="email">Email</Label >
                <Input type="email" id="email" {...register('email')} />

                <Label htmlFor="cellphone">Cellphone</Label >
                <Input type="text" id="cellphone" {...register('cellphone')} />

                <Label htmlFor="password">Senha</Label >
                <Input type="password" id="password" {...register('password')} />

                <Label htmlFor="profileImage">Profile Image</Label >
                <Input type="url" id="profileImage" {...register('profileImage')} />

                <Button type="submit">Cadastrar</Button >

            </Form >
            <StyledLink to={'/'}>Login Page</StyledLink>

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

export { Register }