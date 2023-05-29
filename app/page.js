import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Info from "./components/Info";

export const metadata = {
  title: "Homepage",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Featured />
    </>
  );
}
