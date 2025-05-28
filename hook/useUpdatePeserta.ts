import { useEffect, useState } from "react";
import usePesertaModule from "@/hook/useGetPeserta";
import { axiosClient } from "@/lib/axiosClient";

export interface Student {
  id: number;
  nama_lengkap: string;
  email: string;
  status: string;
}

export default function useStudents() {
  const { useGetPeserta } = usePesertaModule();
  const { data, isLoading, error } = useGetPeserta();

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    console.log(data,"Data")
    if (data && data.calonSiswa) {
      const mappedStudents = data.calonSiswa.map((student: any) => ({
        id: student.id,
        nama_lengkap: student.nama_lengkap,
        email: student.email,
        status: student.status || "Pending",
      }));
      setStudents(mappedStudents);
    }
  }, [data]);

  const updateStatus = async (id: number, status: string) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? { ...student, status } : student))
    );

    try {
      await axiosClient.put(`/calonsiswa/update-status/${id}`, { status });
    } catch(e) {
        console.log(e)
      alert("Gagal update status");
      setStudents((prev) =>
        prev.map((student) => (student.id === id ? { ...student, status: "Pending" } : student))
      );
    }
  };

  return { students, updateStatus, isLoading, error };
}