## 🎬 CineCrit
CineCrit is a full-stack movie discovery and review application.
Users can browse Now Playing movies, (comming soon) log in, and (coming soon) manage their personal watchlists and reviews.

## Tech Stack

### Frontend
- Next.js 13+
  (React framework, App Router)
- React
  (functional components + hooks)
- Tailwind CSS
  (utility-first styling)

### Backend
- Go (Golang)
  REST API server

Custom handlers for:
- Login (/api/login)
- Now Playing Movies (/api/now-playing)
- JSON API responses with CORS enabled for frontend communication

### Database
- Currently mocked — credentials and data validation in Go.
- Planned: SQLite integration for persistent user accounts, reviews, and watchlists.

### External APIs
- TMDB API
  for movie data.

## Setup & Installation
### Prerequisites
- Node.js 18+
- Go 1.21+
- TMDB API key (get one here: https://developer.themoviedb.org/)

### Frontend (Next.js)
```
# Install dependencies
npm install

# Run the development server
npm run dev
```

Frontend runs at http://localhost:3000

### Backend (Go)
Set your TMDB API key:
```
export TMDB_API_KEY=your_api_key_here
```

Run the server:
```
go run cmd/main.go
```

Backend runs at http://localhost:8000

## Current Usage
Users can currently "login" using the email "you@example.com" and the password "password". A "login successful" pop-up will display when those credentials are entered.

Users can browse currently playing movies on the homepage under the title "Now Playing".


## Roadmap
- Connect backend to SQLite for persistent storage
- Implement JWT-based authentication
- Add user reviews and ratings
- Implement search functionality
- Build watchlist feature


### License
MIT License. 
