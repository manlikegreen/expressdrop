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

const vendorSchema = z.object({
  profilePhoto: z.instanceof(File).optional(),
  meansOfIdentification: z
    .string()
    .nonempty("Please select a means of Identification"),
  idNumber: z.string().min(5, "Identification number is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Residential address is required"),
  businessType: z.string().nonempty("Please select a business type"),
});

interface VendorProfileProps {
  onClose: () => void;
}

type VendorProfileFormData = z.infer<typeof vendorSchema>;

const VendorProfile: React.FC<VendorProfileProps> = ({ onClose }) => {
  const form = useForm<VendorProfileFormData>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      meansOfIdentification: "",
      idNumber: "",
      phoneNumber: "",
      address: "",
      businessType: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: VendorProfileFormData) => {
    console.log(data);
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
          Create Vendor Profile
        </h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              name="profilePhoto"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.profilePhoto?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="meansOfIdentification"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Means of Identification</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 border rounded-md dark:bg-gray-700"
                    >
                      <option value="">NIN</option>
                      <option value="internationalPassport">
                        International Passport
                      </option>
                      <option value="votersCard">Voter&apos;s Card</option>
                      <option value="driversLicense">
                        Driver&apos;s License
                      </option>
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.meansOfIdentification?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="idNumber"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identification Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your ID Number" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.idNumber?.message}
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
                  <FormMessage className="text-red-600">
                    {errors.phoneNumber?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="businessType"
              control={control}
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormLabel>Nature of Business</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 border rounded-md dark:bg-gray-700"
                    >
                      <option value="">Select Business Type</option>
                      <option value="private">Private</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.businessType?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="address"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Residential Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your residential address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.address?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-8">
              <Button variant="alternate" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VendorProfile;
