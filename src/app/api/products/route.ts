import { NextResponse,NextRequest } from "next/server";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LV8",
    category: "Men's Shoes",
    price: 100000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0f6d858-f0fe-431e-96ae-cccd2eb744ae/air-force-1-07-lv8-shoes-Smph4G.png",
  },
  {
    id: 2,
    name: "Air Jordan 1 Mid SE",
    category: "Men's Shoes",
    price: 200000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0f6d858-f0fe-431e-96ae-cccd2eb744ae/air-force-1-07-lv8-shoes-Smph4G.png",
  },
  {
    id: 3,
    name: "Air Jordan 1 Retro High OG",
    category: "Men's Shoes",
    price: 300000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0f6d858-f0fe-431e-96ae-cccd2eb744ae/air-force-1-07-lv8-shoes-Smph4G.png",
  },
  {
    id: 4,
    name: "Air Jordan 1 Retro Low 04",
    category: "Women's Shoes",
    price: 300000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0f6d858-f0fe-431e-96ae-cccd2eb744ae/air-force-1-07-lv8-shoes-Smph4G.png",
  },
];
export function GET(req:NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  let newProducts = products.filter((data:any) => data?.id == id)
  if(newProducts.length == 0){
    newProducts = products
  }
  return NextResponse.json({
    status: true,
    message: "Get data products",
    data: newProducts,
  });
}

export function POST() {
  return NextResponse.json({ message: "Post data products" });
}
