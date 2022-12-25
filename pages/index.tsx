import Navbar from "../components/Navbar";
import SliderCard from "../components/MainSlider/SliderCard";
import { prisma } from "../lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Category from "../components/Categories/Category";
import Promotion from "../components/Promotions/Promotion";
import MobileApp from "../components/MobileApp/MobileApp";
import Cards from "../components/Cards/Cards";
import { useEffect, useState } from "react";

export default function Home({ feed, customers, admins }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState("none");

  useEffect(() => {
    if (user == "admin") {
      setIsAdmin("block");
    } else {
      setIsAdmin("none");
    }
  }, [user]);

  const handleUser = (newUser: string) => {
    console.log(newUser);
    setUser(newUser);
  };

  const handleProduct = (product: object) => {
    console.log(product);
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });
  };

  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar admins={admins} customers={customers} handleUser={handleUser} />
      <SliderCard />
      <Category data={feed} isAdmin={isAdmin} handleProduct={handleProduct} />
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
  const feed = await prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  const customers = await prisma.customers.findMany();
  const admins = await prisma.admins.findMany();
  return {
    props: { feed, customers, admins },
  };
};
