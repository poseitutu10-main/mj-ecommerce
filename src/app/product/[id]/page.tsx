import Header from "@/components/common/Header";
import CategoryHeader from "@/features/homepage/components/CategoryHeader";
import ProductDetail from "@/features/product-details/components/ProductDetail";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <CategoryHeader />
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductPage;
