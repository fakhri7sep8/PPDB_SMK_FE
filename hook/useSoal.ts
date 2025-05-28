import { axiosClient } from "@/lib/axiosClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const useSoal = (kategori?: any) => {
  const getSoal = async (kategori?: string) => {
    const query = kategori ? `?kategori=${kategori}` : "";
    return await axiosClient.get(`/soal${query}`).then(res => res.data);
  };

  const useGetSoal = (kategori?: string) => {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["/soal", kategori],
      queryFn: () => getSoal(kategori),
      select: (data) => data.data,
    });
    return { data, isLoading, isError };
  };

  const createSoal = async (payload: any) => {
    return await axiosClient
      .post("/soal/create", payload)
      .then((res) => res.data);
  };
  const useCreateSoal = () => {
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ["/soal/create"],
      queryFn: createSoal,
      select: (data) => {
        return data.data;
      },
    });
    return { data, isLoading, isError, error };
  };

  const deleteSoal = async (id: string) => {
    return await axiosClient.delete(`/soal/${id}`).then((res) => res.data);
  };
  const useDeleteSoal = () => {
    const { mutate } = useMutation({
      mutationFn: (id: string) => deleteSoal(id),
      onSuccess: () => {
        Swal.fire({
          title: "Soal Berhasil Dihapus",
          icon: "success",
        });
      },
      onError: (error) => {
        console.error(error);
        Swal.fire({
          title: "Gagal Menghapus Soal",
          text: "Periksa kembali data yang anda masukkan",
          icon: "error",
        });
      },
    });
    return { mutate };
  };
  return { useGetSoal, useCreateSoal, useDeleteSoal };
};

export default useSoal;
