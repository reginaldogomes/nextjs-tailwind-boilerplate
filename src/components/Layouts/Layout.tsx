import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
    title: string
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div
            className={`flex-col justify-center items-center h-screen bg-white`}
        >
            <Header />
            <div
                className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}
            >
                <main>{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}
