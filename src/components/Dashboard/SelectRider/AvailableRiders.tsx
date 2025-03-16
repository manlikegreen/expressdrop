"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/UI/Button";
import RiderSelectionModal from "./RiderSelectionModal";
import david from "@/assets/Riders/pexels-eric-esma-302047-894156.jpg";
import jeremy from "@/assets/Riders/AdonisM.jpg";
import john from "@/assets/Riders/GHOST.jpg";

type Rider = {
  id: number;
  name: string;
  rating: number;
  img: StaticImageData;
};

const riders: Array<Rider> = [
  { id: 1, name: "John Doe", rating: 4.8, img: john },
  { id: 2, name: "Jeremy Smith", rating: 4.5, img: jeremy },
  { id: 3, name: "David Johnson", rating: 4.7, img: david },
];

const AvailableRidersPage = () => {
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null);

  return (
    <div className="container mt-[7rem] lg:mt-[8rem]">
      <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.3rem] font-semibold text-center">
        Select a Rider
      </h1>
      <p className="text-[0.75rem] md:text-[1.25rem] text-gray-600 dark:text-brand-ash font-medium text-center">
        Choose a rider for your delivery
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {riders.map((rider) => (
          <div
            key={rider.id}
            className="flex flex-col items-center justify-center p-6 border rounded-lg dark:bg-brand-bgdark shadow-lg space-y-4"
          >
            <Image
              src={rider.img}
              alt="user profile"
              className="rounded-full w-32 h-32 object-cover"
            />
            <h2 className="text-lg font-semibold text-center">{rider.name}</h2>
            <p className="text-gray-600 dark:text-brand-ash text-center">
              ⭐ {rider.rating} / 5
            </p>
            <Button className="mt-2" onClick={() => setSelectedRider(rider)}>
              Select Rider
            </Button>
          </div>
        ))}
      </div>

      {selectedRider && (
        <RiderSelectionModal
          rider={selectedRider}
          onClose={() => setSelectedRider(null)}
        />
      )}
    </div>
  );
};

export default AvailableRidersPage;
