import * as yup from "yup";
import Auth from "./lib";
import { useFormik, Form, FormikProvider, getIn } from "formik";

const emailOrUsernameSchema = yup
  .string()
  .nullable()
  .default("")
  .required("Wajib isi")
  .test(
    "is-email-or-username",
    "Gunakan format email atau username",
    (value) => {
      if (!value) return false;

      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const isUsername = /^[a-zA-Z0-9_]+$/.test(value); // username valid tanpa spasi, tanpa @

      return isEmail || isUsername;
    }
  );
export const loginSchema = yup.object().shape({
  email: emailOrUsernameSchema,
  password: yup
    .string()
    .nullable()
    .default("")
    .required("Wajib isi")
    .min(8, "Minimal 8 karakter"),
});

const Login = () => {
  const { useLogin } = Auth();
  const { mutate } = useLogin();

  const formik = useFormik<any>({
    initialValues: loginSchema,
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      mutate(payload);
    },
  });
  const { handleChange, handleSubmit, handleBlur, values, errors } = formik;
};
