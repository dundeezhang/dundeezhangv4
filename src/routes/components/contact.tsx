import "bootstrap/dist/css/bootstrap.min.css";

import "./css/contact.css";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mpwalqqy");
    if (state.succeeded) {
        return <p>Message Sent!</p>;
    }

    return (
        <div className="content-container-center">
            <div className="contact-form-container">
                <h2>Contact Me</h2>
                <form
                    id="contact-form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <p className="contact-card-text">Name</p>
                    <input
                        className="contact-input-box"
                        placeholder="Tim Apple"
                        type="text"
                        name="name"
                        required={true}
                    />
                    <p className="contact-card-text">Email</p>
                    <input
                        className="contact-input-box"
                        placeholder="timapple@domain.ca"
                        type="email"
                        name="email"
                        required={true}
                    />

                    <p className="contact-card-text">Message</p>
                    <textarea
                        className="contact-input-field"
                        maxLength={300}
                        placeholder="Message (Max 300 characters)"
                        name="message"
                        required={true}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        className="contact-button"
                        disabled={state.submitting}
                    >
                        <i className="fa-regular fa-paper-plane send-button-icon"></i>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
