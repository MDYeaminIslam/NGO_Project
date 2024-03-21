import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import DashBoardAdmin from "../component/dashboard/DashBoardAdmin";
import AddMember from "../pages/Member/AddMember";
import MembersList from "../pages/Member/MembersList";
import MemberClosing from "../pages/Member/MemberClosing";
import MemberRequest from "../pages/Member/MemberRequest";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <DashBoardAdmin />
            },
        ]
    },
]);

export default router;