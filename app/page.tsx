import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to AvenueD</h1>
      <p className="mb-8">A gamified marketing platform connecting businesses with their audience.</p>
      <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Products
      </Link>
    </div>
  );
}