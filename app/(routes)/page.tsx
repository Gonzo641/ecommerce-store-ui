import getBillboard from "@/actions/GetBillboard";
import getProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("42aca732-88b3-4618-baab-1e010e84d851");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;



