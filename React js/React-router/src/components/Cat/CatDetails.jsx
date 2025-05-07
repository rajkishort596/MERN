import { useLoaderData } from "react-router-dom";

const CatDetails = () => {
  const { name, origin, description, url, wikipedia_url } = useLoaderData();
  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img src={url} alt={name} className="w-full rounded mb-4 h-72" />
      <p className="text-gray-700 mb-2">
        <strong>Origin:</strong> {origin}
      </p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={wikipedia_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Learn more on Wikipedia
      </a>
    </div>
  );
};

export default CatDetails;
export const catDetailLoader = async ({ params }) => {
  const { breedId } = params;

  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`);
  if (!res.ok) throw new Error("Failed to fetch breed details");
  const breedData = await res.json();

  const imgRes = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  if (!imgRes.ok) throw new Error("Failed to fetch image");

  const imageData = await imgRes.json();
  const { name, origin, description, wikipedia_url } = breedData;
  const url = imageData[0]?.url || "";

  return { name, origin, description, url, wikipedia_url };
};
