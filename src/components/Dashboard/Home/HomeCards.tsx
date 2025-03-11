const HomeCards = () => {
  return (
    <div className="container mx-auto px-4 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {DETAILS.map((d) => (
          <div key={d.title}>
            <section
              className={`rounded-2xl p-4 h-44 w-auto shadow-[0_0_7px_0_#000] dark:shadow-[0_0_7px_0_#fff] 
                ${
                  d.title === "Total Rides Completed"
                    ? "bg-green-500"
                    : d.title === "Total Rides Pending"
                    ? "bg-amber-500"
                    : d.title === "Total Rides Cancelled"
                    ? "bg-red-500"
                    : "bg-brand-bgdark"
                }`}
            >
              <div className="text-[1rem] pt-3 pb-8 ps-2 text-center font-bold uppercase text-white">
                {d.title}
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-white">
                  {d.title === "Total Price"
                    ? `₦ ${d.amount.toLocaleString()}`
                    : d.amount}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Detail {
  title: string;
  amount: number;
  date?: string;
  description?: string;
}

const DETAILS: Array<Detail> = [
  {
    title: "Total Rides Completed",
    amount: 2889,
  },
  {
    title: "Total Rides Pending",
    amount: 202,
  },
  {
    title: "Total Rides Cancelled",
    amount: 74,
  },
  {
    title: "Total Price",
    amount: 70560500,
  },
];

export default HomeCards;
