import React from "react";
import { Contact } from "../Icons";
import { Button } from "../UI/Button";
import Link from "next/link";

const GetInContact = () => {
  return (
    <section className="my-[2rem] lg:my-[5rem]">
      <div className="container flex gap-4 text-2xl lg:text-6xl items-center justify-center py-16">
        <div className="block lg:flex gap-4 text-center font-semibold">
          <div className="flex items-center justify-center">
            <Contact height={100} width={100} />
          </div>
          <span className="text-lg lg:text-6xl">
            Get in contact with us for more information or assistance
          </span>
        </div>
        <Button variant={"default"}>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default GetInContact;
