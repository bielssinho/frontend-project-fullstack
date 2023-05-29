import { Dispatch, SetStateAction, useState } from 'react'
import { Contacts } from '../../pages/dashboard'
import { Container, DeleteIcon, UpdateIcon } from './styles'
import { ModalUpdateContact } from '../ModalUpdateContact'
import { api } from '../../services/api';

interface CardProps {
    id: string;
    contact: Contacts;
    contacts: Contacts[];
    setContacts: Dispatch<SetStateAction<Contacts[]>>;
}

export const Card = ({ contact, contacts, setContacts, id }: CardProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = () => setIsOpenModal(!isOpenModal)

    const deleteContacts = async () => {
        await api.delete(`contact/${id}`)

        const filteredContacts = contacts.filter(cont => cont.id !== id);

        setContacts(filteredContacts)
    }


    return (
        <Container>
            <h3>{contact.contactName}</h3>
            <span>{contact.contactEmail}</span>
            <span>{contact.contactCellphone}</span>
            <div>
                <DeleteIcon onClick={deleteContacts} />
                <UpdateIcon id={contact.id} onClick={toggleModal} />
            </div>
            {
                isOpenModal && <ModalUpdateContact toggleModal={toggleModal} contact={contact} contacts={contacts} setContacts={setContacts} />
            }
        </Container>
    )
}