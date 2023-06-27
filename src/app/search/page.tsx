import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Map from '@/components/Map';
import { format } from 'date-fns';

interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

interface SearchParams {
  location: string;
  startDate: string;
  endDate: string;
  numberOfGuests: number;
}

async function getSearchResults(): Promise<SearchResult[]> {
  const response = await fetch(`https://www.jsonkeeper.com/b/5NPS`, {
    cache: 'no-store',
  });
  return response.json();
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { location, startDate, endDate, numberOfGuests } = searchParams;

  const searchResults = await getSearchResults();

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');

  return (
    <>
      <Header
        placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ stays | {formattedStartDate} - {formattedEndDate} | {numberOfGuests}{' '}
            guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Type of Place
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Price
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              Rooms and Beds
            </p>
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
              More Filters
            </p>
          </div>
          <div className="border-t">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: SearchResult) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              ),
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[450px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </>
  );
}
