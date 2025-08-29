// src/app/layout.js
import './globals.css';

export const metadata = {
    title: "CineCrit",
    description: "Movie reviews and watchlists"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white">
        {children}
        </body>
        </html>
    );
}
