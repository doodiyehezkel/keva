import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <div>
            <header>
                {/* <h1>Header</h1> */}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* <h1>Footer</h1> */}
            </footer>
        </div>
    )
}