"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/UI/Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const riderSelectionSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(5, "Address is required"),
  city: z.string().nonempty("Please select a city"),
  pickupLocation: z.string().nonempty("Please select a pickup location"),
  destination: z.string().nonempty("Please select a destination"),
});

interface RiderSelectionModalProps {
  rider: { id: number; name: string; rating: number };
  onClose: () => void;
}

type RiderSelectionFormData = z.infer<typeof riderSelectionSchema>;

const RiderSelectionModal: React.FC<RiderSelectionModalProps> = ({
  rider,
  onClose,
}) => {
  const form = useForm({
    resolver: zodResolver(riderSelectionSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      pickupLocation: "",
      destination: "",
    },
  });

  const { control, handleSubmit, formState } = form;

  const onSubmit = (data: RiderSelectionFormData) => {
    console.log("Order placed:", data);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl z-50">
      <div className="bg-white dark:bg-brand-bgdark rounded-lg p-6 w-[100%] max-w-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">
          Confirm Your Delivery Details
        </h2>

        <p className="text-center text-gray-600 dark:text-brand-ash">
          Selected Rider: <strong>{rider.name}</strong> ⭐ {rider.rating}/5
        </p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              name="fullName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage>
                    {formState.errors.fullName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage>
                    {formState.errors.phoneNumber?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage>{formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="address"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage>{formState.errors.address?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="city"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 border rounded-md dark:bg-gray-700"
                    >
                      <option value="">Select City</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                    </select>
                  </FormControl>
                  <FormMessage>{formState.errors.city?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="pickupLocation"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter pickup location" {...field} />
                  </FormControl>
                  <FormMessage>
                    {formState.errors.pickupLocation?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="destination"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter destination" {...field} />
                  </FormControl>
                  <FormMessage>
                    {formState.errors.destination?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-8">
              <Button variant="alternate" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Confirm</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RiderSelectionModal;
