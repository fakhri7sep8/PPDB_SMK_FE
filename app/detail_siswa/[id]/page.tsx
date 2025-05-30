"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import useDetailSiswaModule from "@/hook/useDetailPeserta";
import { use } from "react";
import Button from "@/components/button";


export default function DetailSiswaPage({params}: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const siswaId = String(id);
  const router = useRouter();

  const { useGetDetailSiswa } = useDetailSiswaModule();
  const { data: siswa, isLoading, error } = useGetDetailSiswa(siswaId);

  const jenisBerkasDiinginkan = [
    "KK",
    "Akte Kelahiran",
    "Ijazah SMP",
    "Rapor SMP",
  ];

  if (isLoading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        Gagal memuat data siswa
      </div>
    );
  }

  if (!siswa) {
    return <div className="p-6 text-center">Data siswa tidak ditemukan.</div>;
  }

  const berkasTersaring = jenisBerkasDiinginkan
    .map((jenis) => siswa.berkas?.find((b: any) => b.jenis_berkas === jenis))
    .filter(Boolean);

  const statusLengkap = berkasTersaring.length >= 4;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div className="bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Data Diri</h2>

        <div className="flex flex-col items-center mb-6">
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <p className="mt-3 font-semibold">{siswa.nama_lengkap}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded-md space-y-4">
            <div>
              <p className="text-sm text-gray-500">Tempat, tanggal Lahir</p>
              <p className="border-b pb-1">
                {siswa.tempat_lahir}, {siswa.tanggal_lahir}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Jenis Kelamin</p>
              <p className="border-b pb-1">{siswa.jenis_kelamin}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Alamat Rumah</p>
              <p className="border-b pb-1">{siswa.alamat}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Telepon/WA</p>
              <p className="border-b pb-1">{siswa.no_hp}</p>
            </div>
          </div>

          <div className="border p-4 rounded-md space-y-4">
            <div>
              <p className="text-sm text-gray-500">Asal Sekolah</p>
              <p className="border-b pb-1">{siswa.asal_sekolah}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">NISN</p>
              <p className="border-b pb-1">{siswa.nisn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">NIK</p>
              <p className="border-b pb-1">{siswa.nik}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tahun Ajaran</p>
              <p className="border-b pb-1">{siswa.tahun_ajaran}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-6">Berkas Upload</h2>

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border text-center">No</th>
              <th className="px-6 py-3 border text-center">Jenis Berkas</th>
              <th className="px-6 py-3 border text-center">Status Berkas</th>
              <th className="px-6 py-3 border text-center">Detail Berkas</th>
            </tr>
          </thead>
          <tbody>
            {jenisBerkasDiinginkan.map((jenis, index) => {
              const berkas = siswa.berkas?.find(
                (b: any) => b.jenis_berkas === jenis
              );

              return (
                <tr key={jenis} className="odd:bg-white even:bg-gray-50">
                  <td className="px-6 py-4 border text-center align-middle">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border text-center align-middle">
                    <p className="font-light text-gray-600">{jenis}</p>
                  </td>
                  <td className="px-6 py-4 border text-center align-middle text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      {berkas ? (
                        <>
                          <span className="text-green-600">✔</span>
                          Sudah Terupload
                        </>
                      ) : (
                        <>
                          <span className="text-red-600">✘</span>
                          Belum diupload
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 border text-center align-middle">
                    {berkas ? (
                      <button
                        className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-colors"
                        onClick={() =>
                          router.push(`/detail_berkas/${siswa.id}/${berkas.id}`)
                        }
                      >
                        Lihat Detail Berkas
                      </button>
                    ) : (
                      <span className="text-gray-400 italic">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
