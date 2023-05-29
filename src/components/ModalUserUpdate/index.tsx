import { Dispatch, SetStateAction } from 'react'
import { schema } from './validator'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { Modal } from '../Modal'
import { UserResponse } from '../../pages/dashboard'

interface ModalUpUserProps {
    toggleModalUpUser: () => void
    setUser: Dispatch<SetStateAction<UserResponse | undefined>>;
    user: UserResponse
    userId: string | null;
}

interface UserReqUpdate {
    name?: string
    email?: string
    cellphone?: string
    profileImage?: string
}

export const ModalUpdateUser = ({ toggleModalUpUser, setUser, user, userId }: ModalUpUserProps) => {
    const { register, handleSubmit } = useForm<UserReqUpdate>({
        resolver: zodResolver(schema)
    })

    const updateUser = async (data: UserReqUpdate) => {

        const response = await api.patch(`users/${userId}`, data)

        setUser({ ...user, ...response.data })

        window.location.reload()

        toggleModalUpUser()
    }

    return (
        <Modal toggleModal={toggleModalUpUser}>
            <form onSubmit={handleSubmit(updateUser)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" defaultValue={user.name} {...register('name')} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" defaultValue={user.email} {...register('email')} />

                <label htmlFor="cellphone">Cellphone</label>
                <input type="text" id="cellphone" defaultValue={user.cellphone} {...register('cellphone')} />

                <label htmlFor="profileImage">profileImage</label>
                <input type="text" id="profileImage" defaultValue={user.profileImage} {...register('profileImage')} />

                <button type="submit">Atualizar</button>
            </form>
        </Modal>
    )
}