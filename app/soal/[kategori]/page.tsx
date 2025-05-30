"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import useSoal from "@/hook/useSoal";
import { useParams, useRouter } from "next/navigation";

export default function SoalKategoriPage() {
  const params = useParams();
  const kategori = params?.["kategori"];
  const router = useRouter();

  const { useGetSoal, useDeleteSoal } = useSoal();
  const { data, isLoading, isError } = useGetSoal(kategori as string);
  const { mutate: deleteSoal } = useDeleteSoal();

  return (
    <main className="min-h-screen flex bg-gray-50 ml-60">
      <Sidebar />
      <div className="flex-1 px-4 py-6 sm:px-8 max-w-3xl relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-[#18A558]">
            Soal Kategori: {kategori}
          </h1>
          <button
            onClick={() => router.push('/soal')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-3 py-1 rounded text-sm"
          >
            Kembali
          </button>
        </div>

        {isLoading ? (
          <div className="text-gray-600">Loading soal...</div>
        ) : isError || !data ? (
          <div className="text-red-500">Gagal memuat soal.</div>
        ) : data.length === 0 ? (
          <div className="text-gray-600">Belum ada soal di kategori ini.</div>
        ) : (
          <div className="grid gap-4">
            {data.map((soal: any, idx: number) => (
              <div
                key={soal.id}
                className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <div className="mb-2 font-medium text-gray-800 text-sm">
                  {idx + 1}. {soal.pertanyaan}
                </div>

                <ul className="mb-3 space-y-1 text-sm">
                  {soal.opsiJawaban?.map((opsi: any) => (
                    <li
                      key={opsi.id}
                      className={`pl-2 py-1 rounded ${
                        opsi.is_benar
                          ? "bg-green-100 text-green-700 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {opsi.kode}. {opsi.isi}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/soal/${kategori}/edit/${soal.id}`)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSoal(soal.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tombol tambah soal di pojok kanan bawah */}
        <button
          onClick={() => router.push(`/soal/${kategori}/tambah`)}
          className="fixed bottom-8 right-8 z-50 bg-[#18A558] hover:bg-[#15994a] text-white rounded-lg shadow-lg px-6 py-4 font-bold text-lg transition-all"
          title="Tambah Soal"
        >
          + 
        </button>
      </div>
    </main>
  );
}