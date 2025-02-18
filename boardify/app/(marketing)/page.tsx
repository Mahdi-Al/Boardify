import { Medal } from "lucide-react";
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 bg-amber-100 text-amber-700 flex items-center border rounded-full shadow-sm p-4">
          <Medal className="h-6 w-6 mr-2 uppercase" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Boardify helps team move
        </h1>
        <section className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work forward
        </section>
      </div>
    </div>
  );
};
export default MarketingPage;
