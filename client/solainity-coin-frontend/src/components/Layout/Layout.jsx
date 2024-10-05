import {Outlet} from 'react-router-dom' 
import { HeaderComponent } from '../Header/Header'
import { FooterComponent } from '../Footer/Footer'

export const Layout = () => {
    return(
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}