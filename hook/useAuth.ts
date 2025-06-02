import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { error } from "console";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Auth = () => {
  const router = useRouter();
  const {data : session} = useSession()
  const login = (payload: any) => {
    return axiosClient.post("/auth/login-admin", payload).then((res) => {
      return res.data;
    });
  };

  const useLogin = () => {
    const { mutate } = useMutation({
      mutationFn: (payload: any) => login(payload),
      onSuccess: async (res) => {
        await signIn("credentials", {
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
          redirect: false,
        });
        router.push("/admin/dashboard");
        // console.log(res)
        Swal.fire({
          title: "Login Berhasil",
          text: "",
          icon: "success",
        });
      },
      onError: (error) => {
        console.log(error);
        Swal.fire({
          title: "Login Gagal",
          text: "Periksa kembali email dan password anda",
          icon: "error",
        });
      },
    });
    return { mutate };
  };

  const getProfile = async () => {
    return await axiosClient.get("/auth/profile", {
      headers: {
        Authorization : `Bearer ${session?.user.access_token}`
      }
    }).then((res) => res.data);
  };

  const useGetProfile = () => {
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ["/auth/profile"],
      queryFn: getProfile,
      select: (data) => {
        return data.data;
      },
    });
    return { data, isLoading, isError, error };
  };
  return { useLogin, useGetProfile };
};

export default Auth;
