import { useQuery } from "@tanstack/react-query";
import { API_KEY, apiConfig } from "../../api/api";
import CategoriCard from "../../components/CategoriCard";

interface Categories {
  id: number;
  name: string;
}
const CategoriesPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiConfig.get(`/genre/movie/list?api_key=${API_KEY}`);
      return res.data.genres;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching movies 😢</p>;

  return (
    <div className="grid grid-cols-6">
      {data?.map((item: Categories) => {
        return <CategoriCard title={item.name} />;
      })}
    </div>
  );
};

export default CategoriesPage;
