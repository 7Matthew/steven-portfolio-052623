import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Errors() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
	const clickHandler = () => {
		navigate(-1, {replace: true});
	};

  return (
    <div className="container" id="error-page">
      <div className="row">
        <div className="col text-center mt-5 p-5">
          <h1 className="text-danger">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <h1>{error.statusText || error.message}</h1>
            <button type = "button" className="btn btn-outline-primary btn-lg" onClick={clickHandler}> back </button>
          </p>
        </div>
      </div>
    </div>
  );
}