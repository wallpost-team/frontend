import { Api } from "./api";
import { DiscordGuilds, DiscordUser, DiscordUserGuilds } from "./types";

export class DiscordApi extends Api {
  static async getUser() {
    return useApi<DiscordUser>("/discord/user");
  }
  static async getGuilds() {
    return useApi<DiscordGuilds>("/discord/user/guilds");
  }
  static async getManageableGuilds() {
    return useApi<DiscordUserGuilds>("/discord/user/guilds/manageable");
  }
  static async getInviteableGuilds() {
    return useApi<DiscordUserGuilds>("/discord/user/guilds/inviteable");
  }
}
