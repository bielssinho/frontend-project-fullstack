import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Card } from '../../components/Card'
import { Contacts, Container, ContainerIcon, DeleteIcon, Header, Main, UpdateIcon } from './styles'
import { ModalAddContact } from '../../components/ModalAddContacts'
import { Button } from '../login/styles'
import { ModalUpdateUser } from '../../components/ModalUserUpdate'


export interface Contacts {
    id: string
    contactName: string
    contactEmail: string
    contactCellphone: string
    createAt: string
}


export interface UserResponse {
    id: string
    name: string
    email: string
    cellphone: string
    profileImage: string
    createAt: string
    contacts: Contacts[]
}

const Dashboard = () => {
    const [user, setUser] = useState<UserResponse>()
    const [contacts, setContacts] = useState<Contacts[]>([])
    const userId: string | null = localStorage.getItem('your-user:id')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenModalUpUser, setIsOpenModalUpUser] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await api.get<UserResponse>(`users/${userId}`)

            setUser(response.data)
            setContacts(response.data.contacts)
        })()

    }, [setContacts])

    const deleteUser = async () => {
        await api.delete(`users/${userId}`)

        localStorage.clear()

        window.location.reload()
    }

    const toggleModal = () => setIsOpenModal(!isOpenModal)
    const toggleModalUpUser = () => setIsOpenModalUpUser(!isOpenModalUpUser)

    return (
        <Container>
            <Header>
                <h1>My contacts list</h1>
            </Header>


            <Main>
                <div>
                    <img src={user?.profileImage} alt='Profile Image' />
                    <h2>{user?.name}</h2>
                    <ContainerIcon>
                        <DeleteIcon onClick={deleteUser} />
                        <UpdateIcon onClick={toggleModalUpUser} />
                    </ContainerIcon>
                </div>

                <Contacts>
                    <ul>
                        {
                            contacts.map(contact => <Card key={contact.id} id={contact.id} contact={contact} contacts={contacts} setContacts={setContacts} />)
                        }
                    </ul>
                </Contacts>
                <Button type="button" onClick={toggleModal}>New Contact</Button>
                {
                    isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />
                }
                {
                    isOpenModalUpUser && <ModalUpdateUser toggleModalUpUser={toggleModalUpUser} setUser={setUser} user={user!} userId={userId} />
                }
            </Main>
        </Container>
    )
}

export { Dashboard }