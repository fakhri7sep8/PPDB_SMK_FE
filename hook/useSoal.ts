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
    const {mutate} = useMutation({
        mutationFn: (payload: any) => createSoal(payload),
        onSuccess: (res) => {
          console.log(res.data)
          Swal.fire({
            title: "Soal Berhasil Dibuat",
            icon: "success",
          });
        },
        onError: (error) => {
          console.error(error);
          Swal.fire({
            title: "Gagal Membuat Soal",
            text: "Periksa kembali data yang anda masukkan",
            icon: "error",
          });
        }
    })
    return {mutate};
  };

  const deleteSoal = async (id: string) => {
    const query = id ? `?id=${id}` : "";
    return await axiosClient.delete(`/soal/delete/${query}`).then((res) => res.data);
  };
  const useDeleteSoal = () => {
    const { mutate } = useMutation({
      mutationFn: (id: string) => deleteSoal(id),
      onSuccess: () => {
        window.location.reload()
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

  const updateSoal = async (payload: any, id:string) => {
    return await axiosClient
      .put(`/soal/update/${id}`, payload)
      .then((res) => res.data);
  }
  const useUpdateSoal = (id:string) => {
    const {mutate}= useMutation({
      mutationFn : (payload: any, ) => updateSoal(payload, id),
      onSuccess: (res) => {
        console.log(res.data);
        Swal.fire({
          title: "Soal Berhasil Diperbarui",
          icon: "success",
        });
      },
      onError: (error) => {
        console.error(error);
        Swal.fire({
          title: "Gagal Memperbarui Soal",
          text: "Periksa kembali data yang anda masukkan",
          icon: "error",
        });
      }
    })
    return { mutate };
  }

  const getSoalById = async (id: string) => {
  return await axiosClient.get(`/soal/${id}`).then(res => res.data);
};

const useGetSoalById = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["/soal", id],
    queryFn: () => getSoalById(id),
    enabled: !!id,
    select: (data) => data.data, // ambil data.pertanyaan, data.opsiJawaban
  });

  return { data, isLoading, isError };
};
  return { useGetSoal, useCreateSoal, useDeleteSoal, useUpdateSoal, useGetSoalById   };
};

export default useSoal;
