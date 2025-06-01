'use client';
import * as yup from "yup";
import { useFormik, FormikProvider, Form, getIn } from "formik";
import Auth from "@/hook/useAuth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      const isUsername = /^[a-zA-Z0-9_]+$/.test(value);
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
  const {data:session, status} = useSession()
  console.log(session, 'session', status)
  const { useLogin } = Auth();
  const { mutate } = useLogin();
  const router = useRouter();

  const formik = useFormik<any>({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: (payload) => {
      console.log(payload)
      mutate(payload);
    },
  });
  const { handleChange, handleSubmit, handleBlur, values, errors, touched, isSubmitting } = formik;
  if( status === "authenticated") {
    return router.push("/admin/dashboard");
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#18A558]">Login</h2>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="email"
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#18A558] ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="username"
                placeholder="Masukkan email atau username"
              />
              {errors.email && touched.email && (
                <div className="mt-1 text-sm text-red-500">Email Harus Di Isi</div>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#18A558] ${errors.password && touched.password ? "border-red-500" : "border-gray-300"}`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                placeholder="Masukkan password"
              />
              {errors.password && touched.password && (
                <div className="mt-1 text-sm text-red-500">Password harus diisi</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#18A558] text-white py-2 rounded hover:bg-[#16a54a] transition-all duration-200"
              disabled={isSubmitting}
            >
              {/* {isSubmitting ? "Sedang masuk..." : "Masuk"} */}
              Masuk
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Login;
