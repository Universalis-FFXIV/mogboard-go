package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/Universalis-FFXIV/mogboard-go/server/auth"
	"github.com/gin-gonic/gin"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
)

func main() {
	port := flag.String("p", "5336", "The port that the application will run on.")
	flag.Parse()

	goth.UseProviders(auth.GetDiscordAuth(fmt.Sprintf("http://localhost:%s/auth/discord", *port)))

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

	r.Run(fmt.Sprintf(":%s", *port))
}
