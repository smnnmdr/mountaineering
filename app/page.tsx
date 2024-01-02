import Image from "next/image";
import MainPage from "./mainPage/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between my-0 mx-auto  ">
      <MainPage />
    </main>
  );
}
