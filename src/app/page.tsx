import Header from "@/components/common/Header";
import CategoryHeader from "@/features/homepage/components/CategoryHeader";
import MainBanner from "@/features/homepage/components/MainBanner";
import NewArrivals from "@/features/homepage/components/NewArrivals";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <CategoryHeader />
        <MainBanner />
        <NewArrivals />
      </div>
    </>
  );
}
