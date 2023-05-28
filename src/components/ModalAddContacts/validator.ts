import { z } from 'zod'

export const schema = z.object({
    contactName: z.string().min(3, 'O nome deve ter no minimo 3 caracteres.').max(120, 'O nome deve ter no máximo 120 caracteres.'),
    contactEmail: z.string().email('O email deve ser um formato válido.'),
    contactCellphone: z.string().min(10).max(12, 'O numero deve ter no máximo 12 caracteres.'),
    createAt: z.string()
})

export type CreateContactData = z.infer<typeof schema>

