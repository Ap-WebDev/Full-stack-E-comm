
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function ProductCard() {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative my-4 mx-2 overflow-hidden rounded-2xl border-2 border-gray-700"
        >
          <a href=''>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center lg:w-auto"
            />

            <div className="mt-4 flex justify-between px-4 mb-2">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
