import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoute";

export default function App() {
    return (
        <>
        <div className="container">
            {/* Homepage */}
            <Router>
                <AppRoutes />
            </Router>
        </div>
        </>
    )
}