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

const staffSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  profilePicture: z.instanceof(File).optional(),
});

interface AddStaffProps {
  onClose: () => void;
}

type AddStaffFormData = z.infer<typeof staffSchema>;

const AddStaff: React.FC<AddStaffProps> = ({ onClose }) => {
  const form = useForm<AddStaffFormData>({
    resolver: zodResolver(staffSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddStaffFormData>({
    resolver: zodResolver(staffSchema),
  });

  const onSubmit = (data: AddStaffFormData) => {
    console.log("Staff Data:", data);
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
        <h2 className="text-xl font-bold text-center mb-4">Add Staff</h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Profile Picture */}
            <FormField
              name="profilePicture"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.profilePicture?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            {/* First Name */}
            <FormField
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.firstName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              name="lastName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.lastName?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.phoneNumber?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              name="password"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600">
                    {errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            {/* Buttons */}
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

export default AddStaff;
