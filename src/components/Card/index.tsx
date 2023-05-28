import { Contacts } from '../../pages/dashboard'
import { Container } from './styles'

interface CardProps {
    contact: Contacts
}

export const Card = ({ contact }: CardProps) => {
    return (
        <Container>
            <h3>{contact.contactName}</h3>
            <span>{contact.contactEmail}</span>
            <span>{contact.contactCellphone}</span>
        </Container>
    )
}