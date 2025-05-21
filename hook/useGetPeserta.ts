import { axiosClient } from "@/lib/axiosClient"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const usePesertaModule = () => {
    const getPeserta = async()=>{
        return await axiosClient.get('/calonsiswa/getAll').then((res) => res.data) 
    }

    const useGetPeserta = () => {
        const { data } = useQuery({
            queryKey: ['/calonsiswa/getAll'],
            queryFn: getPeserta,
            select: (data) => { return data.data }
        })
        return { data }
    }

    return { useGetPeserta }
}

export default usePesertaModule