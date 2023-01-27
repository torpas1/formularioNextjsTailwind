import { Formik, Field, Form } from "formik";
import Image from "next/image";
import profilePic from '/public/PERSONAL_USER.png'

export const RegisterForm = ({ styles }) => (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Image
          src={profilePic}
          width={50}
          height={50}
        />
        <label className={styles.label}>Nombre completo</label>
        <Field className={styles.field} id="name" name="name" />
        <label className={styles.label}>
          Correo electronico
        </label>
        <Field className={styles.field} id="email" name="email" />
        <label className={styles.label}>Contraseña</label>
        <Field className={styles.field} id="Password" name="Password" />
        <div class="mt-8">
          <button type="submit" className={styles.button}>
            Registrarse
          </button>
        </div>
      </Form>
    </Formik>
  </>
);
