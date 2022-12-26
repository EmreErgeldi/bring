import CategoryNavbar from "./CategoryNavbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Header from "../ui/Header";
import Navbar from "../Navbar";
import Promotion from "../Promotions/Promotion";
import CategoryTable from "./CategoryTable";
import Basket from "./Basket";
import { getServerSideProps } from "../../pages";
import { isAdminAtom } from "../../lib/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function CategorySection({
  feed,
  product,
  admins,
  customers,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isAdmin] = useAtom(isAdminAtom);
  useEffect(() => {
    console.log(isAdmin);
  });
  return (
    <div className="main-layout bg-gray-50">
      <div className="lg:sticky lg:top-0 lg:z-20">
        <Navbar admins={admins} customers={customers} />
        <Header />
      </div>
      <div className="flex flex-col items-stretch max-w-[1232px] mx-auto">
        <section>
          <Promotion />
        </section>
        <div className="flex md:flex-row justify-between relative">
          <div className="lg:top-32 top-[128px] flex flex-col items-start max-w-[240px] sticky">
            <CategoryNavbar data={feed} />
          </div>
          <div className="md:sticky md:top-2 md:self-start flex flex-col items-start">
            <CategoryTable data={product} categories={categories} />
          </div>
          <div className="max-w-[300px] sticky overflow-y-auto lg:top-32">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}
