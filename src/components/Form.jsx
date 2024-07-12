import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                "service_pl4q3vb",
                "template_3paqej8",
                {
                    from_name: form.name,
                    to_name: "Muzamil Khan",
                    from_email: form.email, // Corrected here from "form.email"
                    to_email: "muzamilpukhtun@gmail.com",
                    message: form.message,
                },
                "gYtgnRzAhLE8_rX75"
            )
            .then(
                () => {
                    alert("Thank You. I will get back to you as soon as possible.");
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="border-b border-neutral-300 pb-4">
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 p-8">
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your name</span>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your good name?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    ></input>
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your email</span>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    ></input>
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your Message</span>
                    <textarea
                        value={form.message}
                        onChange={handleChange}
                        rows={7}
                        name="message"
                        placeholder="What you want to say!"
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                    ></textarea>
                </label>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Form;
