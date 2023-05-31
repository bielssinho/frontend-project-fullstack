import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterData, schema } from './validator'
import { useRegister } from '../../hooks/useRegister'
import { ToastContainer } from 'react-toastify'
import { Button, Container, Form, Input, Label, StyledLink, Title } from './styles'

const Register = () => {
    const { onSubmitRegister } = useRegister();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        resolver: zodResolver(schema)
    })


    return (
        <Container>
            <Title>Cadastro</Title>

            <Form onSubmit={handleSubmit(onSubmitRegister)}>
                <Label htmlFor="name">Name</Label >
                <Input type="text" id="name" {...register('name')} />
                {errors.name?.message && <span>{errors.name.message}</span>}

                <Label htmlFor="email">Email</Label >
                <Input type="email" id="email" {...register('email')} />
                {errors.email?.message && <span>{errors.email.message}</span>}

                <Label htmlFor="cellphone">Cellphone</Label >
                <Input type="text" id="cellphone" {...register('cellphone')} />
                {errors.cellphone?.message && <span>{errors.cellphone.message}</span>}

                <Label htmlFor="password">Senha</Label >
                <Input type="password" id="password" {...register('password')} />
                {errors.password?.message && <span>{errors.password.message}</span>}

                <Label htmlFor="profileImage">Profile Image</Label >
                <Input type="url" id="profileImage" {...register('profileImage')} />
                {errors.profileImage?.message && <span>{errors.profileImage.message}</span>}

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