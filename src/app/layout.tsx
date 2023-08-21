import '@styles/globals.css'
import {Inter} from 'next/font/google'
import Utils from "@app/Utils";
import NavProvider from "@components/nav/NavProvider";
import Footer from "@components/page/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: {
        template: '%s • Fadi Gorges | Software Developer Portfolio',
        default: 'Fadi Gorges | Software Developer Portfolio',
    },
    description: ''
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    const htmlClasses = `scroll-smooth overflow-hidden ${inter.className}`

    return (
        <html lang="en" data-theme="light" className={htmlClasses}>
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-R57G4EL5JL"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R57G4EL5JL');
            </script>
        </head>
        <Utils>
            <body className="w-full h-full overflow-y-scroll">
            <NavProvider>
                {children}
                <Footer/>
            </NavProvider>
            </body>
        </Utils>
        </html>
    )
}
