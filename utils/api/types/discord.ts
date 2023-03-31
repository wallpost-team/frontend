import {
  RESTGetAPICurrentUserGuildsResult,
  RESTGetAPICurrentUserResult,
} from "discord-api-types/v10";

export type DiscordUser = RESTGetAPICurrentUserResult;
export type DiscordUserGuilds = RESTGetAPICurrentUserGuildsResult;
export type DiscordGuilds = {
  manageable: RESTGetAPICurrentUserGuildsResult;
  inviteable: RESTGetAPICurrentUserGuildsResult;
};
