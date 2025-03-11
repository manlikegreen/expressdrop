interface TableHeaders {
  header: string;
}

const TABLEHEADERS: Array<TableHeaders> = [
  { header: "Order Code" },
  { header: "Pick Up Location" },
  { header: "Destination" },
  { header: "No. Of Items" },
  { header: "Rider Details" },
  { header: "Delivery Status" },
];

const History = () => {
  const statusColors: Record<string, string> = {
    ongoing: "bg-amber-500 text-white",
    delivered: "bg-green-500 text-white",
    cancelled: "bg-red-500 text-white",
  };
  return (
    <div>
      <div className="container mt-[4.5rem] overflow-x-auto px-10 py-6">
        <table className="w-full border-separate border-spacing-y-5">
          <thead className="mb-3">
            <tr className="py-6">
              {TABLEHEADERS.map((header, index) => (
                <th
                  key={header.header}
                  className={`py-4 ps-2 bg-gray-200 dark:bg-brand-bgdark uppercase font-bold border-y-2 border-black dark:border-brand-bg text-center ${
                    index === 0
                      ? "rounded-l-xl"
                      : index === TABLEHEADERS.length - 1
                      ? "rounded-r-xl"
                      : ""
                  }`}
                >
                  {header.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLEDATAS.map((data) => (
              <tr
                key={data.OrderCode}
                className="bg-gray-200 dark:bg-brand-bgdark text-center"
              >
                <td className="py-4 rounded-l-xl">
                  <div className="pb-1">{data.OrderCode}</div>
                </td>
                <td className="text-base dark:text-brand-bg py-4">
                  {data.PickupLocation}
                </td>
                <td className="text-base dark:text-brand-bg py-4">
                  {data.Destination}
                </td>
                <td className="text-base dark:text-brand-bg py-4">
                  <div className="pb-1">{data.NoOfItems}</div>
                </td>
                <td className="text-base dark:text-brand-bg py-4">
                  <div className="flex flex-col gap-2">
                    <div>{data.VendorName}</div>
                    <div>{data.VendorPhoneNumber}</div>
                  </div>
                </td>
                <td className="text-base dark:text-brand-bg py-4 rounded-r-xl">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      statusColors[data.DeliveryStatus || "ongoing"]
                    }`}
                  >
                    {data.DeliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface TableData {
  OrderCode: string;
  PickupLocation: string;
  Destination: string;
  NoOfItems: string;
  VendorName: string | null;
  VendorPhoneNumber?: string;
  DeliveryStatus: string;
  status?: "ongoing" | "delivered" | "cancelled";
}

const TABLEDATAS: Array<TableData> = [
  {
    OrderCode: "00XR9TG73",
    PickupLocation: "Sagbama",
    Destination: "Bayelsa",
    NoOfItems: "15",
    VendorName: "Miracle Opara",
    VendorPhoneNumber: "07033549826",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "39DJVG736",
    PickupLocation: "Dambam",
    Destination: "Bauchi",
    NoOfItems: "300",
    VendorName: "Nabil Wanka Ali",
    VendorPhoneNumber: "09088392020",
    DeliveryStatus: "cancelled",
  },
  {
    OrderCode: "3048UFIW8",
    PickupLocation: "Ekeremor",
    Destination: "Bayelsa",
    NoOfItems: "1",
    VendorName: "Bryan Obi Nwosu",
    VendorPhoneNumber: "08133900002",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "1237DBQH8",
    PickupLocation: "Warri North",
    Destination: "Delta",
    NoOfItems: "5000",
    VendorName: "Emmanuel Okoro",
    VendorPhoneNumber: "07083759200",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "DI2390JD8",
    PickupLocation: "Tai",
    Destination: "Rivers State",
    NoOfItems: "150",
    VendorName: "Timothy Spiff",
    VendorPhoneNumber: "09028164492",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "2E90348D7",
    PickupLocation: "Bodo",
    Destination: "Rivers State",
    NoOfItems: "1",
    VendorName: "James Oche Silva",
    VendorPhoneNumber: "08055218846",
    DeliveryStatus: "cancelled",
  },
  {
    OrderCode: "20DLLOD77",
    PickupLocation: "Eliozu",
    Destination: "Rivers State",
    NoOfItems: "27",
    VendorName: "Paul Olaitan",
    VendorPhoneNumber: "08199264927",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "TCE8992D7",
    PickupLocation: "Rumuomasi",
    Destination: "Rivers State",
    NoOfItems: "4000",
    VendorName: "Gabriel Wilcox",
    VendorPhoneNumber: "07025539017",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "28E702FFX",
    PickupLocation: "Wuse",
    Destination: "Abuja FCT",
    NoOfItems: "30",
    VendorName: "Henry Edet",
    VendorPhoneNumber: "09149274662",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "28E7092FX",
    PickupLocation: "Gbagada",
    Destination: "Lagos",
    NoOfItems: "3",
    VendorName: "Michael Ejor",
    VendorPhoneNumber: "09000182230",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "28E702F09",
    PickupLocation: "Guzape",
    Destination: "Abuja FCT",
    NoOfItems: "6",
    VendorName: "Aniekan Etim-John",
    VendorPhoneNumber: "09149274690",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "2940FU90X",
    PickupLocation: "Yaba",
    Destination: "Lagos",
    NoOfItems: "18",
    VendorName: "Olanrewaju Thomas",
    VendorPhoneNumber: "0913088422",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "ORD124402",
    PickupLocation: "Finima",
    Destination: "Rivers State",
    NoOfItems: "2",
    VendorName: "Gideon Bassey",
    VendorPhoneNumber: "07044900035",
    DeliveryStatus: "delivered",
  },
  {
    OrderCode: "250FLPS28",
    PickupLocation: "Maitama",
    Destination: "Abuja FCT",
    NoOfItems: "75",
    VendorName: "Joseph Okwoche",
    VendorPhoneNumber: "08033472357",
    DeliveryStatus: "ongoing",
  },
  {
    OrderCode: "00E702FFX",
    PickupLocation: "Umuahia",
    Destination: "Abia",
    NoOfItems: "125",
    VendorName: "George Obuh",
    VendorPhoneNumber: "09032271997",
    DeliveryStatus: "cancelled",
  },
];

export default History;
