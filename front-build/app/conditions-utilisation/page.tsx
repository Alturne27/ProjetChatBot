import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Aurora from "@/components/ui/reactbits/Backgrounds/Aurora/Aurora";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="absolute h-full w-full">
        <Aurora
          colorStops={["#032E69", "#3D70C8", "#B82A38"]}
          blend={0.7}
          amplitude={0.5}
          speed={2}
        />
      </div>
      <Header accueil={false}></Header>
      <main className="flex flex-row h-full py-6 px-8 justify-start"></main>
      <Footer />
    </div>
  );
}
