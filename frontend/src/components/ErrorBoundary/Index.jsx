import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../pages/ErrorPage/Index";
export default function ReactErrorBoundary(props) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorPage}
            onError={(error, errorInfo) => {
                console.log("Error caught in boundary!");  
                console.error(error);  
                console.error(errorInfo);
		    }}
        >
            {props.children}
        </ErrorBoundary>
    );
}
