// app/resources/page.tsx
import { AnnouncementBar } from "@/app/components/layout/AnnouncementBar";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";

export default function ResourcesPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Resources
        </h1>
        <p className="mt-4 text-base text-gray-600">Coming soon.</p>
      </main>
      <Footer />
    </>
  );
}