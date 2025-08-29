"use client"

import { useEffect, useState } from "react";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/now-playing")
            .then((res) => res.json())
            .then(setMovies);
    }, []);

    return (
        <main className="min-w-screen-xl mx-auto bg-white p-8">
            <h2 className="text-black text-2xl font-bold mb-6">Now Playing</h2>
            <div className="flex flex-col gap-8">
                {movies.map(movie => (
                    <div key={movie.id} className="flex flex-row bg-white rounded-xl shadow p-4 hover:scale-105 transition">
                        <img
                            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                            alt={movie.title}
                            className=" max-h-64 rounded-lg mb-4"
                        />
                        <div className="flex flex-col pl-4">
                            <h3 className="text-lg font-semibold text-black">{movie.title}</h3>
                            <p className="text-yellow-500">{'★'.repeat(Math.ceil(movie.vote_average/2))}</p>
                            <h4 className="flex flex-col justify-items-start pt-4 text-gray-800 font-semibold">Description
                                <p className="font-thin text-gray-600">{movie.overview}</p>
                            </h4>

                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
}
