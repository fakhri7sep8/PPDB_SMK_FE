import { axiosClient } from "@/lib/axiosClient"
import { useMutation } from "@tanstack/react-query"
import { error } from "console"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"


const Auth = () => {
    const router = useRouter()
    const login = (payload:any) => {
        return axiosClient.post("/auth/login-admin", payload).then((res)=>{res.data})
    }

    const useLogin = () => {
        const {mutate} = useMutation({
            mutationFn:(payload:any)=> login(payload),
            onSuccess: async(res)=>{
                router.push('/dashboard')
                // console.log(res)
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
        return {mutate}
    }
    return {useLogin}
}

export default Auth