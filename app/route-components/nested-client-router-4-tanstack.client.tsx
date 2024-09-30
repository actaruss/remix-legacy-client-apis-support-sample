import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavLinkWrapper } from "../components/NavLinkWrapper";
import { routePaths } from "../constants/route-paths";

const queryClient = new QueryClient();

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: "This is mocked fetch data!" });
        }, 5000);
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
const pathName = routePaths.tanStack;

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLinkWrapper to={`${pathName}`}>
            TanStack react query
          </NavLinkWrapper>
        </li>
      </ul>
    </nav>

    {/* The Outlet renders the child route components */}
    <Outlet />
  </div>
);

export function TanStackRoute() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Single parent route that renders child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
