import { z } from 'zod'

export const schema = z.object({
    name: z.string().min(3, 'É necessário ter no minimo 3 caracteres').max(120),
    email: z.string().email('Deve ser um e-mail'),
    cellphone: z.string().min(11, 'Necessário ter o DDD ex: (19)xxxxx-xxxx'),
    password: z.string().nonempty('Senha é obrigatória'),
    profileImage: z.string().url()
});

export type RegisterData = z.infer<typeof schema>;