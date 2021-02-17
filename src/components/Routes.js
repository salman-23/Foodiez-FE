import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import CategoryList from "./CategoryList";
// import CategoryDetail from "./CategoryDetail";
import CategoryForm from "./CategoryForm";
// import ShopList from "./ShopList";
// import ShopDetail from "./ShopDetail";
const Routes = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

  return (
    <Switch>
      <Route path={["/categories/create", "/categories/:categorySlug/edit"]}>
        <CategoryForm />
      </Route>
      {/* <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route> */}
      <Route path="/categories">
        <CategoryList categories={categories} />
      </Route>
      {/* <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route> */}
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
