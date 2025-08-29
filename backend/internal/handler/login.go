package handler

import (
	"encoding/json"
	"net/http"

	"backend/internal/model"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.WriteHeader(http.StatusOK)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Content-Type", "application/json")

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var creds model.Credentials
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	if creds.Email == "you@example.com" && creds.Password == "password" {
		err := json.NewEncoder(w).Encode(map[string]string{"message": "Login successful"})
		if err != nil {
			return
		}
	} else {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
	}
}
