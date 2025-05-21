import { axiosClient } from "@/lib/axiosClient"
import { useMutation } from "@tanstack/react-query"
import { error } from "console"
import Swal from "sweetalert2"


const Auth = () => {
    const login = (payload:any) => {
        return axiosClient.post("/auth/login-admin").then((res)=>{res.data})
    }

    const useLogin = () => {
        const mutate = useMutation({
            mutationFn:(payload:any)=> login(payload),
            onSuccess: async(res)=>{
                Swal.fire({
                    title: "Login Berhasil",
                    text: '',
                    icon: "success",
                })
            },
            onError: (error)=>{
                console.log(error)
            }
        })
        return mutate
    }
    return {useLogin}
}

export default Auth