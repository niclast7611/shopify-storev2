import Link from "next/link";

export default function Hero({ collectionNames }) {
  const betterCollections = collectionNames.slice(1);
  return (
    <div className="py-48 mx-auto max-w-7xl px-4 sm:pt-24 md:pt-72 text-center">
      <h1 className="font-extrabold text-primary-color">
        <p className="text-primary-color bg-clip-text text-4xl sm;text-6xl md:text-7xl mb-5">
          Studio 57 Clothing Co.
        </p>
        <p className="text-xl sm:text-3xl md:text-4xl">
          Shop our collections below
        </p>
        {/* <p className="text-xl sm:text-3xl md:text-4xl pt-4">
          Shop Products Below
        </p> */}
      </h1>

      <div className="mt-5 max-w-content mx-auto flex justify-center items-center md:mt-8">
        {betterCollections.map((collection) => (
          <Link
            href={`collections/${collection.node.handle}`}
            passHref
            key={collection.node.id}
          >
            <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-background-color bg-secondary-color hover:secondary-color">
              {collection.node.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
