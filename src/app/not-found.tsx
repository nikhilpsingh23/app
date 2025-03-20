import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link 
          href="/" 
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}