import { ReactElement, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";

const Home = lazy(() => import("./pages/Home"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const AddTask = lazy(() => import("./pages/AddTask"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Categories = lazy(() => import("./pages/Categories"));
const Clear = lazy(() => import("./pages/Clear"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRouter = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
