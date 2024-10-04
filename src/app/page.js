import Link from 'next/link';
import data from '../../public/data/data.json'; 

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Web Development Technologies</h1>
      <ul className="space-y-2">
        {data.map(item => (
          <li key={item.id} className="border p-4 rounded hover:bg-gray-100">
            <Link href={`/details/${item.id}`} className="text-blue-500">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
