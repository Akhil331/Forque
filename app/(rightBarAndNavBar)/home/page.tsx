import { auth } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();

  if (!session?.user) return null;

  console.log(session);
  return <div>this is home page</div>;
};

export default Home;
