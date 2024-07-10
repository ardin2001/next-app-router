import type { Metadata, ResolvingMetadata } from 'next'
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
// export const metadata: Metadata = {
//   title: 'My Next app',
//   description: "This's application use help everyone",
//   icons: {
//     icon: '/next.svg',
//   }
// }

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  let id = params.id
  id = 'A478zLgzIbsAtfKj5D2R'

  // fetch data
  const product = await fetch(`https://next-app-router-jet.vercel.app/api/products?id=${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.data.name,
    openGraph: {
      images: product.data.image ? [product.data.image, ...previousImages] : previousImages,
    },
  }
}

export default function Home({ params, searchParams }: Props) {
  return (
    <main className="flex flex-col items-center pt-10">
      <h2>Learning App Route</h2>
      <p>Next JS</p>
    </main>
  );
}
