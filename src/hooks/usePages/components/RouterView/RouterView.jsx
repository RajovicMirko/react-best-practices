import { Redirect, Switch } from "react-router-dom";
import CustomRoute from "../CustomRoute";
import useConfig from "../../useConfig";

function RouterView() {
  const { pages, fallbackPath } = useConfig();

  return (
    <Switch>
      {pages.map((route) => CustomRoute({ key: route.name, ...route }))}
      <Redirect to={fallbackPath} />
    </Switch>
  );
}

export default RouterView;
