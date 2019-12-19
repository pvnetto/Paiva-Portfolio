import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import * as emailjs from 'emailjs-com';

import Button from '../../../commons/buttons/Button';
import style from './contact-form.module.css';

const ContactForm = () => {

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string(),
        message: yup.string().required(),
    })

    console.log(process.env.EMAILJS_USER_ID);

    const sendEmail = (values, e) => {
        emailjs.send(
            'gmail',
            'portfolio_template',
            {
                from_name: values.name,
                from_email: values.email,
                from_subject: values.subject,
                from_message: values.message
            },
            process.env.EMAILJS_USER_ID,
        ).then(() => console.log('email sent'));

        e.resetForm();
    };

    return (
        <Formik validationSchema={schema}
            onSubmit={sendEmail}
            initialValues={{ name: "", email: "", subject: "", message: "" }}>

            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <form className={style.contactForm} onSubmit={handleSubmit} action="">
                    <div>
                        <Field value={values.name} onChange={handleChange} name="name" type="text" placeholder="Name" />
                        <Field value={values.email} onChange={handleChange} name="email" type="email" placeholder="E-mail" />
                    </div>

                    <div className={style.feedback}>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        {touched.email && errors.email && <p>{errors.email}</p>}
                    </div>

                    <div>
                        <Field value={values.subject} onChange={handleChange} name="subject" type="text" placeholder="Subject" />
                    </div>

                    <div className={style.feedback}>
                        {touched.subject && errors.subject && <p>{errors.subject}</p>}
                    </div>

                    <div>
                        <Field value={values.message} onChange={handleChange} name="message" as="textarea" type="text" placeholder="Message" />
                    </div>

                    <div className={style.feedback}>
                        {touched.message && errors.message && <p>{errors.message}</p>}
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