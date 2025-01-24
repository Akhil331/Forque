import { auth } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();
  if (!session?.user) return null;
  return <div>this is home page</div>;
};

export default Home;
