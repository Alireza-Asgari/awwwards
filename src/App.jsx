import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="bg-blue-300 w-full h-screen"></section>
    </main>
  );
}