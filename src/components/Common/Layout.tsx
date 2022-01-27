import NavBar from '../NavBar/NavBar'


interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;