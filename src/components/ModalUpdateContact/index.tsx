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
    contact: Contacts;
    contacts: Contacts[];
}

interface ContactsReqUpdate {
    contactName?: string
    contactEmail?: string
    contactCellphone?: string
}

export const ModalUpdateContact = ({ toggleModal, setContacts, contact, contacts }: ModalAddTaskProps) => {
    const { register, handleSubmit } = useForm<ContactsReqUpdate>({
        resolver: zodResolver(schema)
    })

    const updateContact = async (data: ContactsReqUpdate) => {

        const response = await api.patch<Contacts>(`contact/${contact.id}`, data)

        const index = contacts.findIndex(cont => cont.id === contact.id);

        if (index !== -1) {
            contacts.splice(index, 1, response.data);

            setContacts(contacts)
        }

        toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal}>
            <form onSubmit={handleSubmit(updateContact)}>
                <label htmlFor="contactName">Name</label>
                <input type="text" id="contactName" defaultValue={contact.contactName} {...register('contactName')} />

                <label htmlFor="contactEmail">Email</label>
                <input type="text" id="contactEmail" defaultValue={contact.contactEmail} {...register('contactEmail')} />

                <label htmlFor="contactCellphone">Cellphone</label>
                <input type="text" id="contactCellphone" defaultValue={contact.contactCellphone} {...register('contactCellphone')} />

                <button type="submit">Atualizar</button>
            </form>
        </Modal>
    )
}