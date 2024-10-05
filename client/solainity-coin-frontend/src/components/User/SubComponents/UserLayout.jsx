import { Outlet } from "react-router-dom"
import UserHeader from "./UserHeader"

const UserLayout = () => {
    return(
        <div className="flex min-h-screen ">
            <UserHeader />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default UserLayout