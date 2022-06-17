import { Field, Form, Formik } from "formik"
import React from "react"
import { useFakts } from "../fakts/fakts-config"
import { useHerre } from "../herre/herre-context"


export const LoginButton = (props) => {
    
    const { login} = useHerre()
    const { fakts , changeFakts, load} = useFakts()

    return <>
        {fakts ? <><button onClick={ () => login()}>Login to {fakts.herre.endpoint}</button> <button onClick={ () => changeFakts(null)}>Change Server</button></> : <>
        <Formik
            initialValues={{ host: '' }}
            onSubmit={({host}, actions) => {
                load({
                    base_url: `http://${host}/f/`,
                    name: host
                })
            }}
            >
                <Form>
                <Field type="input" name="host" placeholder="localhost:8000" />
                <button className="text-white" type="submit">Connected Here</button>
                </Form>
        </Formik>
        </>}
       
    </>


}