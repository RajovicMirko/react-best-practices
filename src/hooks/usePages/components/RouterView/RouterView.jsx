import { Redirect, Switch } from "react-router-dom";
import CustomRoute from "../CustomRoute";
import usePages from "../../usePages";

function RouterView() {
  const { pages, fallbackPath } = usePages();

  return (
    <Switch>
      {pages.map((route) => CustomRoute({ key: route.name, ...route }))}
      <Redirect to={fallbackPath} />
    </Switch>
  );
}

export default RouterView;
