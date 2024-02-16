// product/[id]/page.tsx

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function page({ params }: any) {
  const product = await getProduct(params.slug);

  return (
    <>
    <section>
        <p>
        The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.
        </p>
        <br/>
        <p>
            Take a look at loading, when each page render and then try again fetching the same page you wont see the loading
        </p>
    </section>
    <div style={{ border: '2px solid cyan', padding: '20px', margin: '10px' }}>

      <div>I am product page {JSON.stringify(product)}</div>
    </div>
    </>
  );
}


export async function generateStaticParams() {
    const posts = await fetch('https://dummyjson.com/products').then((res) => res.json())
    return posts.products.map((post:any) => ({
        slug: post.slug,
      }))

}
