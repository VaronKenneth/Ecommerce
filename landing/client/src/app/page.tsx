import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative bg-white p-5 border-2 border-gray-800">
        <p>Este es un div con un borde derecho diagonal.</p>
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[calc(100%-8px)] border-t-white border-l-8 border-l-transparent z-10"></div>
        <div className="absolute top-0 w-0 h-0 border-t-[calc(100%-8px)] border-t-gray-800 border-l-10 border-l-transparent z-0 -right-[2px]"></div>
      </div>
    </main>
  );
}
