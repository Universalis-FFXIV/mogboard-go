package main

import (
	"log"
	"net/http"

	"github.com/Universalis-FFXIV/mogboard-go/server/auth"
	"github.com/gin-gonic/gin"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
)

func main() {
	goth.UseProviders(auth.GetDiscordAuth("http://localhost:5336/auth/discord"))

	r := gin.Default()
	r.GET("/auth/discord", func(c *gin.Context) {
		user, err := gothic.CompleteUserAuth(c.Writer, c.Request)
		if err != nil {
			log.Println(err)
		}

		c.Header("Location", "/")
		c.Status(http.StatusTemporaryRedirect)

		log.Println(user.Name)
	})
	r.GET("/logout/discord", func(c *gin.Context) {
		gothic.Logout(c.Writer, c.Request)
		c.Header("Location", "/")
		c.Status(http.StatusTemporaryRedirect)

		log.Println("Logged out")
	})
	r.Run(":5336")
}
