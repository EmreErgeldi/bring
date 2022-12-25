import { products } from "@prisma/client";
import { atom } from "jotai";

const basketAtom = atom([] as products[]);

export { basketAtom };
