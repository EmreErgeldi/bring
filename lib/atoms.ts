import { products } from "@prisma/client";
import { atom } from "jotai";

const basketAtom = atom([] as products[]);
const isAdminAtom = atom(false as boolean);
const isEditAtom = atom(false as boolean);

export { basketAtom, isAdminAtom, isEditAtom };
