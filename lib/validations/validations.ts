import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Campo obligatorio'),
  password: Yup.string().required('Campo obligatorio').min(3, 'Debe tener mas de 3 caracteres'),
})