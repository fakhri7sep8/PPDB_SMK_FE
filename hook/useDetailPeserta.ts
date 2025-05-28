// hooks/useDetailSiswaModule.ts
import { axiosClient } from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

const useDetailSiswaModule = () => {
  const getDetailSiswa = async (id: string) => {
    const res = await axiosClient.get(`/calonsiswa/detail/${id}`);
    return res.data;
  };


  const useGetDetailSiswa = (id: string) => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["detailSiswa", id],
      queryFn: () => getDetailSiswa(id),
      enabled: !!id,
      select: (data) => data.siswa,
    });

    return { data, isLoading, error };
  };

  return { useGetDetailSiswa };
};

export default useDetailSiswaModule;