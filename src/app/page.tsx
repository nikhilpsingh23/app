import Navbar from "@/components/navbar/navbar";
import ClientWrapper from "@/components/client-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ClientWrapper />
    </main>
  );
}
