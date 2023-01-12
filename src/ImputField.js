import { ErrorMessage, useField } from "formik";
import React, { useState } from "react";

const InputField = ({label, ...props}) => {

    const [error,setError] = useState(false)
    const [field,meta] = useField(props)
    console.log('field', field)
    console.log('meta', meta)
    return(
        <>
            
                <label htmlFor="feild.name">{label}</label>
                <div className="inputDiv">
                <input className={`input ${meta.touched && meta.error && "is_invalid"}`}
                autoComplete="off"
                {...field} {...props}
                />
                {/* {
                    (meta.error) ?
                    <ErrorMessage component="div" name={field.name} className="error" />
                    :
                    <p></p>
                } */}
                <ErrorMessage component="div" name={field.name} className="error" />
                {/* {
                    error ? console.log("ifff") : <ErrorMessage component="div" name={field.name} className="error" />
                } */}
                </div>
                    {/* {console.log("error@@",meta.error)} */}

                {/* {<ErrorMessage /> ?  */}
                {/* console.log("called@@") : console.log("called") } */}
                
        </>
    )
}

export default InputField