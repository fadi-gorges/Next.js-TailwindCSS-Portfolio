'use client'
import Section from "@components/page/Section";
import {FormEvent, useState} from "react";

const ContactSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }

        setIsLoading(true);
        const res = await fetch("/api/contact", {method: "POST", body: JSON.stringify(data)});
        setSuccess(res.ok);
        setIsLoading(false);

        if (res.ok)
            (document.getElementById("contact-form") as HTMLFormElement).reset();
    };

    return (
        <Section id="contact" bg="base-100">
            <h3 className="text-primary font-extrabold">CONTACT ME</h3>
            <div className="mt-8">
                <h5>
                    Feel free to send me an email at <a href="mailto:fadi@fadigorges.dev" className="link-primary">
                    fadi@fadigorges.dev
                </a><br/><br/>
                    Or, you can contact me through the form below:
                </h5>
                <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-3 items-start mt-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Name *</span>
                        </label>
                        <input type="text" required autoComplete="name" name="name"
                               className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Email *</span>
                        </label>
                        <input type="email" required autoComplete="email" name="email"
                               className="input input-bordered w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Message *</span>
                        </label>
                        <textarea name="message" required rows={5}
                                  className="textarea textarea-bordered w-full"/>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <button type="submit" disabled={isLoading} className="btn btn-primary px-8">Submit
                        </button>
                        {
                            success !== null && (success
                                ? <div className="alert alert-success flex w-fit py-2 px-4 h-fit text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="stroke-success-content shrink-0 h-6 w-6"
                                         fill="none"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span className="text-success-content">Sent</span>
                                </div>
                                : <div className="alert alert-error flex w-fit py-2 px-4 h-fit text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="stroke-error-content shrink-0 h-6 w-6"
                                         fill="none"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span className="text-error-content">Error Occurred</span>
                                </div>)
                        }
                    </div>
                </form>
            </div>
        </Section>
    )
}

export default ContactSection