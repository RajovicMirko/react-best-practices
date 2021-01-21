import { withRouter } from "react-router-dom";

function NotAuth(props) {
  const handleGoBack = () => props.history.goBack();

  return (
    <div>
      <h3>You do not have permission to do this</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default withRouter(NotAuth);
