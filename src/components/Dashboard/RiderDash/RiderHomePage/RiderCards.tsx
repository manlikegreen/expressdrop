const RiderHomeCards = () => {
  return (
    <div className="container mx-auto px-4 pt-12">
      <div className="bg-gray-200 dark:bg-brand-bgdark p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {DETAILS.map((d) => (
            <div key={d.title}>
              <section
                className={`rounded-2xl p-4 h-auto w-auto shadow-[0_0_4px_0_#000] dark:shadow-[0_0_4px_0_#fff] 
                bg-brand-bg dark:bg-brand-dark`}
              >
                <div className="text-sm pt-3 pb-4 text-center font-bold uppercase">
                  {d.title}
                </div>
                <div className="flex justify-center w-full">
                  <div className="flex items-center justify-center p-4 bg-gray-200 dark:bg-brand-bgdark w-fit rounded-xl">
                    <div
                      className={`text-base font-bold text-center w-full ${
                        d.title === "Total Rides Completed"
                          ? "text-green-500"
                          : d.title === "Total Rides Pending"
                          ? "text-amber-500"
                          : d.title === "Total Rides Cancelled"
                          ? "text-red-500"
                          : "text-brand-secondary dark:text-brand-bg"
                      }`}
                    >
                      {d.title === "Total Price"
                        ? `₦ ${d.amount.toLocaleString()}`
                        : d.amount}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
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

export default RiderHomeCards;
