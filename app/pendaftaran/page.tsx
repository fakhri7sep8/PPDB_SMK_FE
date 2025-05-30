"use client";

import Button from "@/components/button";
import Sidebar from "@/components/sidebar";
import usePesertaModule from "@/hook/useGetPeserta";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function DataPendaftarPage() {
  const { useGetPeserta } = usePesertaModule();
  const { data } = useGetPeserta();

  const router = useRouter();


  const calonSiswa = data?.calonSiswa || [];
  const count = data?.count || 0;

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-100">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-700">
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Foto</th>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">NISN</th>
                <th className="px-4 py-2 border">No HP</th>
                <th className="px-4 py-2 border">Asal Sekolah</th>
                <th className="px-4 py-2 border">Detail</th>
              </tr>
            </thead>
            <tbody>
              {calonSiswa.map((item: any, i: number) => (
                <tr
                  key={i}
                  className="text-sm border-t hover:bg-gray-50 text-center"
                >
                  <td className="px-4 py-2 border">{i + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    <Image
                      src={"/assets/Vector.png"}
                      alt="Foto"
                      width={32}
                      height={32}
                      className="mx-auto rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 border">{item.nama_lengkap}</td>
                  <td className="px-4 py-2 border">{item.nisn}</td>
                  <td className="px-4 py-2 border">{item.no_hp}</td>
                  <td className="px-4 py-2 border">{item.asal_sekolah}</td>
                  <td className="text-black border">
                    <div className="flex justify-center gap-2">
                    <Button
                      title="Detail"
                      colorSchema="green"
                      variant="solid"
                      width="sm"
                      height="sm"
                      onClick={() => router.push(`/detail_siswa/${item.id}`)}
                    />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
