import { ErrorMessage, Field, Form, Formik } from 'formik';
import './App.css';
import InputField from './ImputField';
import * as Yup from "yup"
import { useRef, useState } from 'react';

function App() {

  const [data,setData] = useState()

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 Characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 Characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is Invalid")
      .required("Email must be Required"),
    password: Yup.string()
      .min(6, "Password must be 6 Characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null],"Password must Match")
      .required("Confirm password is Required"),
  })
  const formRef = useRef()

  return (
   <>
      <div className='main'>
      <Formik
      initialValues={{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log("submit",values)
        setData(values)
        // values=formRef
        // formRef = values
      }}
      >
        {
          formik => (
            <>
            {console.log("formik",formik)}
              <div className="mainContainer">
              <h1> Sign Up Page</h1>

            
              {/* {({ errors, touched }) => ( */}
              <Form className='container'>

                <InputField label="First Name" name="firstName" type="text" />
                {/* {errors.name && touched.name ? (
                   <div>{errors.name}</div>
                    ) : null}
                    <ErrorMessage name="name" /> */}
                <InputField label="Last Name" name="lastName" type="text" />
                <InputField label="Email" name="email" type="email" />
                <InputField label="Password" name="password" type="password" />
                <InputField label="Confirm Password" name="confirmPassword" type="password" />

                <button type='submit'>Submit</button>
              </Form>
              {/* )} */}
              </div>
            </>
          )
        }
      </Formik>

        {
          console.log("form@@",data)
        }
        </div>
   </>
  );
}

export default App;
