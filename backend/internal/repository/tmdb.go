package repository

import (
	"backend/internal/model"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type tmdbResponse struct {
	Results []model.Movie `json:"results,omitempty"`
}

func FetchNowPlaying() ([]model.Movie, error) {
	apiKey := os.Getenv("TMDB_API_KEY")
	if apiKey == "" {
		return nil, fmt.Errorf("TMDB_API_KEY not set")
	}

	fmt.Println("Fetching now playing movies")
	url := fmt.Sprintf("https://api.themoviedb.org/3/movie/now_playing?api_key=%s&language=en-US&page=1", apiKey)
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch movies: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}

	var tmdbResp tmdbResponse
	if err := json.NewDecoder(resp.Body).Decode(&tmdbResp); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}
	return tmdbResp.Results, nil
}
