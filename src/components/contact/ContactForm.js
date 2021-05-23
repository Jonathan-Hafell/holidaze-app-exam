import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").min(3),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      {errors.name && <span>{errors.name.message}</span>}
      <input placeholder="Name..." {...register("name")} />

      {errors.email && <span>{errors.email.message}</span>}
      <input placeholder="Email..." {...register("email")} />

      {errors.message && <span>{errors.message.message}</span>}
      <textarea placeholder="Message..." {...register("message")} />

      <button className="contact-btn">
        Send <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </form>
  );
}

export default ContactForm;
