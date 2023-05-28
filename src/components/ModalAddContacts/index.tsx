import { Dispatch, SetStateAction } from "react"
import { CreateContactData, schema } from "./validator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { Modal } from "../Modal"
import { Contacts } from "../../pages/dashboard"

interface ModalAddTaskProps {
    toggleModal: () => void
    setContacts: Dispatch<SetStateAction<Contacts[]>>
}

export const ModalAddContact = ({ toggleModal, setContacts }: ModalAddTaskProps) => {
    const { register, handleSubmit } = useForm<CreateContactData>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: CreateContactData) => {
        console.log('oi')
        const response = await api.post<Contacts>('contact', data)
        console.log(response)
        setContacts(previousContact => [response.data, ...previousContact])
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

                <button type="submit">Cadastro</button>
            </form>
        </Modal>
    )
}