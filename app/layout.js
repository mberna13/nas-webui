import { IBM_Plex_Mono } from 'next/font/google'
import { cn } from './lib/utils'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex-mono',
    weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={ibmPlexMono.variable}>
        <body
            className={cn(
                'antialiased font-ibm-plex-mono',
                ibmPlexMono.className
            )}
        >
        {children}
        </body>
        </html>
    )
}