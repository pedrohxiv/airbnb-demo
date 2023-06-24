import Header from '@/components/Header';
import Banner from '@/components/Banner';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

async function getExplorerData() {
  const response = await fetch('https://www.jsonkeeper.com/b/4G1G');
  return response.json();
}

async function getCardsData() {
  const response = await fetch('https://www.jsonkeeper.com/b/VHHT');
  return response.json();
}

export default async function Home() {
  const explorerData = await getExplorerData();
  const cardsData = await getCardsData();

  return (
    <>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explorerData.map(({ img, location, distance }: any) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywheree</h2>
          <div className="flex space-x-3 overflow-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }: any) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>
        <section className="relative py-16 cursor-pointer">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
