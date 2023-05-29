import { Dispatch, SetStateAction } from 'react'
import { schema } from './validator'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { Modal } from '../Modal'
import { Contacts } from '../../pages/dashboard'

interface ModalAddTaskProps {
    toggleModal: () => void
    setContacts: Dispatch<SetStateAction<Contacts[]>>
}

interface ContactsReq {
    contactName: string
    contactEmail: string
    contactCellphone: string
}

export const ModalAddContact = ({ toggleModal, setContacts }: ModalAddTaskProps) => {
    const { register, handleSubmit } = useForm<ContactsReq>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: ContactsReq) => {

        const response = await api.post<Contacts>('contact', data)

        setContacts(previousContact => [...previousContact, response.data])
        toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal}>
            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="contactName">Name</label>
                <input type="text" id="contactName" {...register('contactName')} />

                <label htmlFor="contactEmail">Email</label>
                <input type="text" id="contactEmail" {...register('contactEmail')} />

                <label htmlFor="contactCellphone">Cellphone</label>
                <input type="text" id="contactCellphone" {...register('contactCellphone')} />

                <button type="submit">Cadastrar</button>
            </form>
        </Modal>
    )
}