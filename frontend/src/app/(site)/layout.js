import { Poppins } from 'next/font/google';
import Link from "next/link";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function SiteLayout({ children }) {
    return (
        <>
            <header className="bg-gradient-to-r from-orange-300 to-red-400 p-8 shadow-lg w-full mx-auto">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <h1 className="text-3xl font-bold text-white flex flex-col">
                        CineCrit
                        <p className="text-base font-bold ">
                            Discover movies, read reviews, and share your thoughts with the world.
                        </p>
                    </h1>
                    <nav>
                        <ul className="flex gap-8 text-lg">
                            <li>
                                <Link href="/" className="hover:underline text-white">Home</Link>
                            </li>
                            <li>
                                <Link href="/search" className="hover:underline text-white">Search</Link>
                            </li>
                            <li>
                                <Link href="/watchlist" className="hover:underline text-white">Watchlist</Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:underline text-white">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="max-w-screen-xl mx-auto w-full p-5">
                {children}
            </main>
        </>
    );
}
