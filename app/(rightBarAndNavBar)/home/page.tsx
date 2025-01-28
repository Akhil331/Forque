import { auth } from "@/auth";
import { SearchForm } from "@/components/search-form";
import React from "react";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();
  if (!session?.user) return null;
  const { search } = await searchParams;
  return (
    <div>
      <SearchForm
        type="search"
        placeholder="Search for Questions Here..."
        className="w-[300px]"
      />
      {search && <p>Search: {search}</p>}
    </div>
  );
};

export default Home;
