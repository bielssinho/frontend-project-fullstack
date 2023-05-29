import { z } from 'zod'
import * as yup from 'yup'


export const schema = z.object({
    name: z.string().min(3, 'É necessário ter no minimo 3 caracteres').max(120),
    email: z.string().email('Deve ser um e-mail'),
    cellphone: z.string().min(11, 'Necessário ter o DDD ex: (19)xxxxx-xxxx'),
    profileImage: z.string().refine((value) => yup.string().url().isValidSync(value) && /\.(jpg|jpeg|png|gif)$/i.test(value), 'A imagem de perfil deve ser uma URL válida de uma imagem.'),
});