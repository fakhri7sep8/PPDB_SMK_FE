"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import useDetailSiswaModule from "@/hook/useDetailPeserta";
import Sidebar from "@/components/sidebar";

export default function Page() {
  const params = useParams();
  const siswaId = String(params.siswaId);
  const berkasId = Number(params.berkasId);

  const { useGetDetailSiswa } = useDetailSiswaModule();
  const { data: siswa, isLoading, error } = useGetDetailSiswa(siswaId);

  console.log("Params:", params);
  console.log("Siswa data:", siswa);
  console.log("Cari berkas dengan id:", berkasId);
  console.log(
    "Hasil find berkas:",
    siswa?.berkas?.find((b: any) => String(b.id) === String(berkasId))
  );

  const berkas = siswa?.berkas?.find((b: any) => String(b.id) === String(berkasId));

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-60 flex-1 p-6 overflow-auto">
        {isLoading && (
          <div className="text-center text-gray-600">Loading berkas...</div>
        )}
        {error && (
          <div className="text-center text-red-600">
            Gagal memuat data berkas siswa.
          </div>
        )}
        {!isLoading && !error && !berkas && (
          <div className="text-center italic text-gray-500">
            Berkas tidak ditemukan.
          </div>
        )}
        {!isLoading && !error && berkas && (
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
            <h1 className="text-xl font-semibold">
              Detail Berkas: {berkas.jenis_berkas}
            </h1>
            <div className="flex justify-center">
              <Image
                src={`http://localhost:4000/${berkas.file_path}`}
                alt={berkas.jenis_berkas}
                width={400}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Status: {berkas.status}</p>
              <p>Diunggah: {new Date(berkas.uploaded_at).toLocaleString()}</p>
              {berkas.keterangan && <p>Keterangan: {berkas.keterangan}</p>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
