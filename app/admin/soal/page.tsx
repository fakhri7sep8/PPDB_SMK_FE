"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/card";
import useStudents from "@/hook/useUpdatePeserta";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Peserta {
  id: number;
  nama_lengkap: string;
  email: string;
  status: string;
}

export default function BankSoalPage() {
  const router = useRouter()
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar />
      <main className="ml-60 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Bank Soal</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="outline" padding="lg" width="full">
          <div className="flex items-center gap-4 mb-4">
            <Image src={"/assets/notebook.png"} width={100} height={100} alt=''></Image>
            <div>
              <h3 className="text-xl font-semibold mb-2">Matematika</h3>
              <p className="text-sm text-gray-600">Soal-Soal Matematika</p>
            </div>
          </div>
          <Button title="Lihat Soal" width="full" colorSchema="green" onClick={()=>{router.push('/admin/soal/Matematika')}}/>
        </Card>
        <Card variant="outline" padding="lg" width="full">
          <div className="flex items-center gap-4 mb-4">
            <Image src={"/assets/notebook.png"} width={100} height={100} alt=''></Image>
            <div>
              <h3 className="text-xl font-semibold mb-2">Psikolog</h3>
              <p className="text-sm text-gray-600">Soal-Soal Matematika</p>
            </div>
          </div>
          <Button title="Lihat Soal" width="full" colorSchema="green" onClick={()=>{router.push('/admin/soal/Psikolog')}}/>
        </Card>
        <Card variant="outline" padding="lg" width="full">
          <div className="flex items-center gap-4 mb-4">
            <Image src={"/assets/notebook.png"} width={100} height={100} alt=''></Image>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bahasa Inggris</h3>
              <p className="text-sm text-gray-600">Soal-Soal Matematika</p>
            </div>
          </div>
          <Button title="Lihat Soal" width="full" colorSchema="green" onClick={()=>{router.push('/admin/soal/Inggris')}}/>
        </Card>
        <Card variant="outline" padding="lg" width="full">
          <div className="flex items-center gap-4 mb-4">
            <Image src={"/assets/notebook.png"} width={100} height={100} alt=''></Image>
            <div>
              <h3 className="text-xl font-semibold mb-2">Diniyyah</h3>
              <p className="text-sm text-gray-600">Soal-Soal Matematika</p>
            </div>
          </div>
          <Button title="Lihat Soal" width="full" colorSchema="green" onClick={()=>{router.push('/admin/soal/Diniyah')}}/>
        </Card>
        {/* <Card variant="outline" padding="lg" width="full">
          <div className="flex items-center gap-4 mb-4">
            <Image src={"/assets/notebook.png"} width={100} height={100} alt=''></Image>
            <div>
              <h3 className="text-xl font-semibold mb-2">Matematika</h3>
              <p className="text-sm text-gray-600">Soal-Soal Matematika</p>
            </div>
          </div>
          <Button title="Lihat Soal" width="full" colorSchema="green" onClick={()=>{router.push('')}}/>
        </Card> */}
        </section>
      </main>
    </div>
  );
}
