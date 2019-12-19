import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Button from '../../../commons/buttons/Button';
import style from './contact-form.module.css';

const ContactForm = () => {

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string(),
        message: yup.string().required(),
    })

    return (
        <Formik validationSchema={schema}
            onSubmit={() => console.log("Submiting")}
            initialValues={{ name: "", email: "", subject: "", message: "" }}>

            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <form className={style.contactForm} onSubmit={handleSubmit} action="">
                    <div>
                        <input value={values.name} onChange={handleChange} name="name" type="text" placeholder="Name" />
                        <input value={values.email} onChange={handleChange} name="email" type="email" placeholder="E-mail" />
                    </div>

                    <div className={style.feedback}>
                        {errors.name && <p>{errors.name}</p>}
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div>
                        <input value={values.subject} onChange={handleChange} name="subject" type="text" placeholder="Subject" />
                    </div>

                    <div className={style.feedback}>
                        {errors.subject && <p>{errors.subject}</p>}
                    </div>

                    <div>
                        <textarea value={values.message} onChange={handleChange} name="message" type="text" placeholder="Message" />
                    </div>

                    <div className={style.feedback}>
                        {errors.message && <p>{errors.message}</p>}
                    </div>
                    <div className={style.btnContainer}>
                        <Button type={"submit"}>Send</Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default ContactForm;