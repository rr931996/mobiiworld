"use client"; 

import Link from 'next/link';
import { useParams } from 'next/navigation';
import data from '../../../../public/data/data.json'; 

const Details = () => {
  const { id } = useParams(); 

  // Find the item by ID
  const item = data.find(item => item.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <h3 className="text-1xl font-bold mb-4">{item.description}</h3>
      <p>{item.details}</p>
      <Link href="/" className="text-blue-500 underline mt-4 block">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Details;
