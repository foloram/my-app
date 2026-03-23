import style from "../components/Contact.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    message: yup.string().required("Message is required"),
    submit: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log(data);
    console.log("it was submitted");
    setSubmitted(true);
  };

  const { username, isAuth } = useSelector((state) => state.user);
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with our team {username}</p>

      <div className={style.container}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={style.containerChild}>
            <label className={style.containerLabel}>Name</label>
            <input
              type="text"
              className={style.containerInput}
              {...register("name")}
            ></input>
          </div>
          <div className={style.containerChild}>
            <label className={style.containerLabel}>Email</label>
            <input
              type="email"
              className={style.containerInput}
              {...register("email")}
            ></input>
          </div>
          <div className={style.containerChild}>
            <label className={style.containerLabel}>message</label>
            <textarea
              className={style.containerInput}
              {...register("message")}
            ></textarea>
            <input
              type="submit"
              className={style.containerInput}
              {...register("submit")}
            ></input>
            {submitted && <p>Form submitted successfully!</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
