// hooks/useNilaiKategoriModule.ts
import { axiosClient } from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

const useNilaiKategoriModule = () => {
  const getNilaiKategori = async () => {
    const res = await axiosClient.get("/user-jawaban/nilai-kategori");
    return res.data;
  };

  const useGetNilaiKategori = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["nilaiKategori"],
      queryFn: getNilaiKategori,
      select: (data) => data.data,
    });

    return { data, isLoading, error };
  };

  return { useGetNilaiKategori };
};

export default useNilaiKategoriModule;
