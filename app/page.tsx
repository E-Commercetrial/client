import ProductCard from "@/components/Card";
import CategoryCard from "@/components/CategoryCard";
import Features from "@/components/Featurers";
import Hero from "@/components/Hero";
export default function Home() {

  //TODO: COMPONENTLER ARASINDAKİ BOŞLUKLARI FİXLE
  const products = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

    
  const data = [
    {
      imageURL:
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-400x400.jpg",
      name: "Tepsiler",
    },
    {
      imageURL:
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-400x400.jpg",
      name: "Fincan Takımı",
    },
    {
      imageURL:
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-400x400.jpg",
      name: "Kahvaltılık Takımı",
    },
    {
      imageURL:
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-400x400.jpg",
      name: "Özel Tasarım Ürünler",
    },
    {
      imageURL:
        "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-2-300x300.jpg",
      name: "Doğal Taşlar",
    },
  ];
  

  return (
    <>
      <Hero />
      <div
        style={{
          padding: "0.5rem",
          border: "1px solid #ddd",
        }}
      >
        <Features />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gridGap: "0.1rem", // Grid boşluğunu istediğiniz değerle değiştirin
        }}
      >
        {data.map((item) => (
          <CategoryCard data={item} />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: "0.2rem",
          backgroundColor: "#FBCE7B",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </div>
    </>
  );
}
