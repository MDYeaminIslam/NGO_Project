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
            {
                path: 'add_member',
                element: <AddMember/>
            },
            {
                path: 'members_list',
                element: <MembersList/>
            },
            {
                path: 'member_closing',
                element: <MemberClosing/>
            },
            {
                path: 'member_request',
                element: <MemberRequest/>
            },
            


        ]
    },
]);

export default router;