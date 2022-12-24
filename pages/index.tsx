import Navbar from "../components/Navbar";
import SliderCard from "../components/MainSlider/SliderCard";
import { prisma } from "../db/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Category from "../components/Categories/Category";
import Promotion from "../components/Promotions/Promotion";
import MobileApp from "../components/MobileApp/MobileApp";
import Cards from "../components/Cards/Cards";
import { useState } from "react";

export default function Home({ feed, customers, admins }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState("");

  const handleUser = (newUser: string) => {
    // the callback. Use a better name
    console.log(newUser);
    //set category addibility, set product addibility
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar admins={admins} customers={customers} handleUser={handleUser} />
      <SliderCard />
      <Category data={feed} />
      <div className=" bg-gray-100">
        <Promotion />
        <div className="container mx-auto grid gap-y-6 pt-8 max-w-[1232px]">
          {/* <Favorites /> */}
          <MobileApp />
          <Cards />
        </div>
      </div>
    </div>
  );
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany();
  const customers = await prisma.customers.findMany();
  const admins = await prisma.admins.findMany();
  return {
    props: { feed, customers, admins },
  };
};
