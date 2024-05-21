import { useContext } from "react";
import { ContextVar } from "@/components/context/MusicContext.jsx";
import { CustomCarousel } from "@/components/main/musicCrousel.jsx";

export function Bodyy() {
  const { trending, top20, top50, evergreen, happy, romantic, excited, sad } = useContext(ContextVar);

  return (
      <div className="min-h-screen" style={{backgroundImage: "url('https://arc.net/noise-light.png') ,linear-gradient(135deg, #D4145A, #FBB03B)"}}>
        <main className="px-4 py-6">
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Trending songs</h2>
            <CustomCarousel list={trending} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Top 20 of this week</h2>
            <CustomCarousel list={top20} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Top 50 of this month</h2>
            <CustomCarousel list={top50} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Evergreen melodies</h2>
            <CustomCarousel list={evergreen} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Happy songs</h2>
            <CustomCarousel list={happy} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Romantic songs</h2>
            <CustomCarousel list={romantic} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Excited songs</h2>
            <CustomCarousel list={excited} />
          </section>
          <section className="mb-10 ml-20">
            <h2 className="text-xl font-semibold text-white mb-4">Sad songs</h2>
            <CustomCarousel list={sad} />
          </section>
        </main>
      </div>
  );
}
