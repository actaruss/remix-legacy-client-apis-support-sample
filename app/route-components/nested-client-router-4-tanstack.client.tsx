import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Outlet, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const Layout = ({ pathName }: { pathName: string }) => (
  <QueryClientProvider client={queryClient}>
    <div>
      <span>Path: {pathName}</span>

      <Outlet />
    </div>
  </QueryClientProvider>
);

export function TanStackRoute({ pathName }: { pathName: string }) {
  return (
    <Routes>
      <Route path="/" element={<Layout pathName={pathName} />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: "This is mocked fetch data!" });
        }, 2000);
      }).then(() => {
        return fetch("https://api.github.com/repos/TanStack/query").then(
          (res) => res.json()
        );
      }),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>🥳</h2>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};
