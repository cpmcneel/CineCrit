package main

import (
	"backend/internal/handler"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/api/login", handler.LoginHandler)
	http.HandleFunc("/api/now-playing", handler.NowPlayingHandler)
	log.Println("Server listening on :8000")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
