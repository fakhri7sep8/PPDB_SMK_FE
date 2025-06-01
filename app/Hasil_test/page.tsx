"use client";

import Sidebar from "@/components/sidebar";
import useNilaiKategoriModule from "@/hook/useNilaiPeserta";

export default function NilaiKategoriPage() {
  const { useGetNilaiKategori } = useNilaiKategoriModule();
  const { data, isLoading, error } = useGetNilaiKategori();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error mengambil data nilai</p>;

  // Ambil semua kategori unik
  const semuaKategori: string[] = Array.from(
    new Set(data.map((item: any) => item.kategori_pelajaran))
  );

  // Ganti Record dengan Map untuk menyimpan nilai per siswa
  const nilaiPerSiswa = new Map<string, Map<string, number>>();

  data.forEach((item: any) => {
    const nama = item.calonSiswa?.nama_lengkap || "Tanpa Nama";
    if (!nilaiPerSiswa.has(nama)) {
      nilaiPerSiswa.set(nama, new Map());
    }
    nilaiPerSiswa.get(nama)?.set(item.kategori_pelajaran, item.nilai);
  });

  // List nama siswa
  const siswaList = Array.from(nilaiPerSiswa.keys());

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 ml-60 overflow-auto">
        <h1 className="text-xl font-bold mb-4">Rekap Nilai Peserta</h1>
        <div className="overflow-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Nama</th>
                {semuaKategori.map((kategori) => (
                  <th key={kategori} className="px-4 py-2 border">
                    {kategori}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {siswaList.map((nama) => (
                <tr key={nama}>
                  <td className="px-4 py-2 border font-medium">{nama}</td>
                  {semuaKategori.map((kategori) => (
                    <td key={kategori} className="px-4 py-2 border">
                      {nilaiPerSiswa.get(nama)?.get(kategori) ?? "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
