package model

type Movie struct {
	ID         int     `json:"id"`
	Title      string  `json:"title"`
	Overview   string  `json:"overview"`
	PosterPath string  `json:"poster_path"`
	Rating     float32 `json:"vote_average"`
}
