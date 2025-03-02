"use client";

import { FormEvent, useState } from "react";

import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import SearchIcon from "./Icons/SearchIcon";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <form
      className="lg:flex items-center lg:relative lg:w-1/2 max-w-[22rem]"
      onSubmit={handleSubmit}
    >
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="hidden lg:block peer bg- border-none lg:h-12 shadow-[0_0_3px_0_#222] dark:shadow-[0_0_10px_0_#fff] rounded-[20px] placeholder:text-center text-center pr-11"
        placeholder="Search for items"
      />
      <Button
        className="lg:absolute right-2 lg:border-none lg:text-[1.1rem] lg:shadow-none peer-focus-visible:text-brand-secondary"
        variant={"alternate"}
        size={"icon"}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export default Search;
