import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from 'lib/validations/validations'


export const LoginForm = ({styles}) => (
  <>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
     validationSchema={loginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <label className={styles.label}>
          Correo electronico
        </label>
        <Field className={styles.field} id='email' name='email' />
        <ErrorMessage component='a' className={styles.errorMsg} name='email' />
        <label className={styles.label}>
          Contraseña
        </label>
        <Field className={styles.field} id='password' name='password' />
        <ErrorMessage
          component='a'
          className={styles.errorMsg}
          name='password'
        />
        <div className='mt-8'>
          <button type='submit' className={styles.button}>
            Login
          </button>
        </div>
      </Form>
    </Formik>
  </>
)