package auth

import (
	"os"

	"github.com/markbates/goth/providers/discord"
)

// GetDiscordAuth returns an authentication provider wrapping the Discord authentication interface.
func GetDiscordAuth(callbackURL string) *discord.Provider {
	return discord.New(os.Getenv("UNIVERSALIS_DISCORD_AUTH_KEY"), os.Getenv("UNIVERSALIS_DISCORD_AUTH_SECRET"), callbackURL, discord.ScopeIdentify, discord.ScopeEmail)
}
