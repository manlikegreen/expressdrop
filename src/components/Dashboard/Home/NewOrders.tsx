import Link from "next/link";
import React from "react";

interface OrderHeaders {
  header: string;
}

const ORDERHEADERS: Array<OrderHeaders> = [
  { header: "Order Code" },
  { header: "Date" },
  { header: "Rider Details" },
];

const NewOrders = () => {
  // const statusColors: Record<string, string> = {
  //   ongoing: "bg-amber-500 text-white",
  //   delivered: "bg-green-500 text-white",
  //   cancelled: "bg-red-500 text-white",
  // };

  return (
    <div className="pt-12 w-full">
      <div className="bg-gray-200 dark:bg-brand-bgdark p-8 rounded-xl w-full">
        <div className="flex justify-between mb-6">
          <h1 className="font-bold">New Orders</h1>
          <Link href="">
            <h1 className="font-medium">View All</h1>
          </Link>
        </div>
        <div>
          <table className="w-full border-separate border-spacing-y-4">
            <thead className="mb-3">
              <tr className="py-6">
                {ORDERHEADERS.map((header, index) => (
                  <th
                    key={header.header}
                    className={`py-4 ps-2 bg-brand-bg dark:bg-brand-bgdark uppercase font-bold border-y-2 border-black dark:border-brand-bg text-center ${
                      index === 0
                        ? "rounded-l-xl"
                        : index === ORDERHEADERS.length - 1
                        ? "rounded-r-xl"
                        : ""
                    }`}
                  >
                    {header.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="px">
              {ORDERS.map((data) => (
                <tr
                  key={data.OrderCode}
                  className="bg-brand-bg dark:bg-brand-bgdark text-center"
                >
                  <td className="py-4 rounded-l-xl">
                    <div className="pb-1">{data.OrderCode}</div>
                  </td>
                  <td className="text-base dark:text-brand-bg py-4">
                    {data.Date}
                  </td>
                  <td className="text-sm dark:text-brand-bg py-4 px-4 rounded-r-xl ">
                    <div className="flex flex-col gap-2">
                      <div>{data.RiderName}</div>
                      <div>{data.RiderPhoneNumber}</div>
                    </div>
                  </td>
                  {/* <td className="text-base dark:text-brand-bg py-4 rounded-r-xl">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        statusColors[data.DeliveryStatus || "ongoing"]
                      }`}
                    >
                      {data.DeliveryStatus}
                    </span>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

interface Order {
  OrderCode: string;
  Date: string;
  RiderName: string;
  RiderPhoneNumber: string;
  DeliveryStatus: string;
  status?: "ongoing" | "delivered" | "cancelled";
}

const ORDERS: Array<Order> = [
  {
    OrderCode: "1237DBQH8",
    Date: "12/03/2025",
    RiderName: "Emmanuel Okoro",
    RiderPhoneNumber: "07083759200",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "1FI0036H8",
    Date: "12/03/2025",
    RiderName: "Emmanuel Okoro",
    RiderPhoneNumber: "07083759200",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "1DI9DBQH8",
    Date: "12/03/2025",
    RiderName: "Emmanuel Okoro",
    RiderPhoneNumber: "07083759200",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "12372DHH8",
    Date: "12/03/2025",
    RiderName: "Emmanuel Okoro",
    RiderPhoneNumber: "07083759200",
    DeliveryStatus: "ongoing",
  },
];

export default NewOrders;
