import { z } from 'zod';


export const createProjectFormSchema = z.object({
  title: z.string().min(5, 'Tytuł musi mieć minimum 5 znaków'),
  description: z.string().min(10, 'Opis musi miec minimum 10 znaków').max(200, 'Opis nie może przekraczać 200 znaków'),
});

export type creareProjectFormData = z.infer<typeof createProjectFormSchema>;

export const createProjectFormDefaultValues:creareProjectFormData = {
  title: '',
  description: ''
}