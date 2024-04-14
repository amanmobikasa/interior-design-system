import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@mantine/core";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button className="text-red-600 bg-white border-[0.01rem] border-red-600 hover:bg-red-700" variant="filled" >Button</Button>
    </>
  );
}
