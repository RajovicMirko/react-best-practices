import React from "react";
import { Route } from "react-router-dom";
import DocumentMeta from "react-document-meta";

const defaultProps = {
  component: null,
  path: "",
  name: "",
  label: "",
  meta: {
    title: "",
    description: "",
    meta: {
      charSet: "",
      name: {
        keywords: "",
      },
    },
  },
};

const RouteContent = (props) => {
  const { meta, component: Component, ...rest } = props;

  return (
    <>
      {meta && <DocumentMeta {...meta} />}
      <Component {...rest} />
    </>
  );
};

function CustomRoute(props) {
  const { component, ...rest } = props;
  return <Route exact {...rest} render={() => <RouteContent {...props} />} />;
}

CustomRoute.defaultProps = defaultProps;
export default CustomRoute;
