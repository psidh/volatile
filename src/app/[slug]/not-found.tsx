import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-white mt-4">The page you are looking for does not exist.</p>
      <p className="text-lg text-white mt-2">
        Return to the{' '}
          <Link className="text-blue-600 hover:underline" href="/">homepage</Link>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
