import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative bg-white p-5 border-2 border-gray-800">
        <p>Este es un div con un borde derecho diagonal.</p>
      <div className="bg-white flex flex-col items-center justify-center h-[260px] w-full px-10">
        <div className='w-full flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-medium p-5 max-[1000px]:text-lg'>Catálogo ESP FILTERS</h2>
          <div className='w-full cursor-pointer'><p>Buscar por medidas</p></div>
        </div>
      </div>
      <div className='w-full h-[600px] flex items-center justify-center bg-[#D4D4D4]'>
        <Image src='' width={1500} height={1500} alt='banner' className='w-full h-full' />
      </div>
      </div>
    </main>
  );
}
