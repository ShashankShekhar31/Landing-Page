import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";
 
const products: Product[] =[ 
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "6",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "7",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  },
  {
    id: "8",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: '/pizza-main.png',
    price: 500,
  }
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div>
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only in 40 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-sung">
              Enjoy a Free Meal if Your Order Takes More Than <b>40</b> Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">Get your pizza now 
            </Button>
          </div>
          <div>
            <Image alt="pizza-main" src={'/pizza-main.png'} width={400} height={400}/>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
        <Tabs defaultValue="pizza">
  <TabsList>
    <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
    <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
  </TabsList>
  <TabsContent value="pizza">
    <div className="grid grid-cols-4 gap-6 mt-6">
    {
      products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
    }
    </div>
  </TabsContent>
  <TabsContent value="beverages">
  <div className="grid grid-cols-4 gap-6 mt-6">
    {
      products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
    }
    </div>
  </TabsContent>
</Tabs>

        </div>
      </section>

    </>
  );
}
