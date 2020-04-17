import React, { useState } from 'react';
import { api_contant } from '../../constants/api.contant';

export const ContactForm = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");


    const onSubmitForm = (event: any) => {
        event.preventDefault();

        const formdata = {
            name: name,
            email: email
        }

        fetch(api_contant.post, {
            method: "post",
            body: JSON.stringify(formdata)
        })
            .then((data: any) => data.json())
            .then((response: any) => console.log(response))
            .catch((error: any) => console.error(error))
    }

    return (
        <form onSubmit={onSubmitForm}>
            <label>Name</label>
            <br />
            <input type="text" name="name" placeholder="Enter name" onChange={event => setname(event.target.value)} />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name="email" placeholder="Enter Email" onChange={event => setemail(event.target.value)} />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
