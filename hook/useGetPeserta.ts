import { axiosClient } from "@/lib/axiosClient"
import { useQuery } from "@tanstack/react-query"

const usePesertaModule = () => {
  const getPeserta = async () => {
    return await axiosClient.get('/calonsiswa/getAll').then((res) => res.data)
  }

  const useGetPeserta = () => {
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['/calonsiswa/getAll'],
      queryFn: getPeserta,
      select: (data) => data.data,
    })

    return { data, isLoading, isError, error }
  }

  return { useGetPeserta }
}

export default usePesertaModule
