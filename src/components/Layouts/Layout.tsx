import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
    title: string
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex-col justify-center items-center bg-white`}>
            <Header />
            <div className={`flex justify-center items-center py-10`}>
                <main>{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}
