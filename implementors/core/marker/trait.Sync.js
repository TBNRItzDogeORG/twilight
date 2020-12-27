(function() {var implementors = {};
implementors["twilight_cache_inmemory"] = [{"text":"impl Sync for CachedEmoji","synthetic":true,"types":[]},{"text":"impl Sync for CachedGuild","synthetic":true,"types":[]},{"text":"impl Sync for CachedMember","synthetic":true,"types":[]},{"text":"impl Sync for CachedMessage","synthetic":true,"types":[]},{"text":"impl Sync for CachedPresence","synthetic":true,"types":[]},{"text":"impl Sync for CachedVoiceState","synthetic":true,"types":[]},{"text":"impl Sync for InMemoryCacheBuilder","synthetic":true,"types":[]},{"text":"impl Sync for EventType","synthetic":true,"types":[]},{"text":"impl Sync for Config","synthetic":true,"types":[]},{"text":"impl Sync for InMemoryCache","synthetic":true,"types":[]}];
implementors["twilight_command_parser"] = [{"text":"impl&lt;'a&gt; Sync for CommandParserConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Commands&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for CommandsMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Prefixes&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for PrefixesMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Arguments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CaseSensitivity","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Parser&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["twilight_embed_builder"] = [{"text":"impl Sync for EmbedAuthorNameError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedAuthorBuilder","synthetic":true,"types":[]},{"text":"impl Sync for EmbedBuildError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedColorError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedDescriptionError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedTitleError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedBuilder","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFieldError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFieldBuilder","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFooterTextError","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFooterBuilder","synthetic":true,"types":[]},{"text":"impl Sync for ImageSourceAttachmentError","synthetic":true,"types":[]},{"text":"impl Sync for ImageSourceUrlError","synthetic":true,"types":[]},{"text":"impl Sync for ImageSource","synthetic":true,"types":[]}];
implementors["twilight_gateway"] = [{"text":"impl Sync for ShardSchemeRangeError","synthetic":true,"types":[]},{"text":"impl Sync for ShardScheme","synthetic":true,"types":[]},{"text":"impl Sync for ClusterBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Config","synthetic":true,"types":[]},{"text":"impl Sync for ClusterCommandError","synthetic":true,"types":[]},{"text":"impl Sync for ClusterStartError","synthetic":true,"types":[]},{"text":"impl Sync for Cluster","synthetic":true,"types":[]},{"text":"impl Sync for StageConversionError","synthetic":true,"types":[]},{"text":"impl Sync for Stage","synthetic":true,"types":[]},{"text":"impl Sync for LargeThresholdError","synthetic":true,"types":[]},{"text":"impl Sync for ShardIdError","synthetic":true,"types":[]},{"text":"impl Sync for ShardBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Config","synthetic":true,"types":[]},{"text":"impl Sync for Events","synthetic":true,"types":[]},{"text":"impl Sync for CommandError","synthetic":true,"types":[]},{"text":"impl Sync for SessionInactiveError","synthetic":true,"types":[]},{"text":"impl Sync for ShardStartError","synthetic":true,"types":[]},{"text":"impl Sync for Information","synthetic":true,"types":[]},{"text":"impl Sync for ResumeSession","synthetic":true,"types":[]},{"text":"impl Sync for Shard","synthetic":true,"types":[]},{"text":"impl Sync for Latency","synthetic":true,"types":[]},{"text":"impl Sync for ShardSink","synthetic":true,"types":[]},{"text":"impl Sync for EventTypeFlags","synthetic":true,"types":[]}];
implementors["twilight_gateway_queue"] = [{"text":"impl Sync for LargeBotQueue","synthetic":true,"types":[]},{"text":"impl Sync for LocalQueue","synthetic":true,"types":[]}];
implementors["twilight_http"] = [{"text":"impl Sync for ErrorCode","synthetic":true,"types":[]},{"text":"impl Sync for ApiError","synthetic":true,"types":[]},{"text":"impl Sync for GeneralApiError","synthetic":true,"types":[]},{"text":"impl Sync for MessageApiError","synthetic":true,"types":[]},{"text":"impl Sync for MessageApiErrorEmbedField","synthetic":true,"types":[]},{"text":"impl Sync for RatelimitedApiError","synthetic":true,"types":[]},{"text":"impl Sync for ClientBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Client","synthetic":true,"types":[]},{"text":"impl Sync for UrlError","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for RatelimitError","synthetic":true,"types":[]},{"text":"impl Sync for RatelimitHeaders","synthetic":true,"types":[]},{"text":"impl Sync for Ratelimiter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetChannelInvites&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Parsed","synthetic":true,"types":[]},{"text":"impl Sync for ExplicitUser","synthetic":true,"types":[]},{"text":"impl Sync for ExplicitRole","synthetic":true,"types":[]},{"text":"impl Sync for Unspecified","synthetic":true,"types":[]},{"text":"impl Sync for ParseTypes","synthetic":true,"types":[]},{"text":"impl Sync for AllowedMentions","synthetic":true,"types":[]},{"text":"impl&lt;'a, E, U, R&gt; !Sync for AllowedMentionsBuilder&lt;'a, E, U, R&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CreateMessageError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CrosspostMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetChannelMessagesError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetChannelMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetChannelMessagesConfiguredError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetChannelMessagesConfigured&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for UpdateMessageError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for EmbedValidationError","synthetic":true,"types":[]},{"text":"impl Sync for GetReactionsError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetReactions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteAllReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteAllReactions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for RequestReactionType","synthetic":true,"types":[]},{"text":"impl Sync for UpdateChannelError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ExecuteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetChannelWebhooks&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateWebhookWithToken&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreatePin&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateTypingTrigger&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for DeleteChannelPermission&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteChannelPermissionConfigured&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeletePin&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for FollowNewsChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetPins&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for UpdateChannelPermission&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateChannelPermissionConfigured&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CreateBanError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetBans&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for RoleFieldsError","synthetic":true,"types":[]},{"text":"impl Sync for RoleFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Sync for TextFieldsError","synthetic":true,"types":[]},{"text":"impl Sync for TextFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Sync for VoiceFieldsError","synthetic":true,"types":[]},{"text":"impl Sync for VoiceFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Sync for CategoryFieldsError","synthetic":true,"types":[]},{"text":"impl Sync for CategoryFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Sync for GuildChannelFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Sync for CreateGuildError","synthetic":true,"types":[]},{"text":"impl Sync for RoleFields","synthetic":true,"types":[]},{"text":"impl Sync for GuildChannelFields","synthetic":true,"types":[]},{"text":"impl Sync for CategoryFields","synthetic":true,"types":[]},{"text":"impl Sync for TextFields","synthetic":true,"types":[]},{"text":"impl Sync for VoiceFields","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CreateGuildChannelError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateGuildChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CreateGuildPruneError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateGuildPrune&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetEmojis&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetAuditLogError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetAuditLog&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetGuildPruneCountError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildPruneCount&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildIntegrations&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for SyncGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetGuildMembersError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildMembers&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for UpdateGuildMemberError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateGuildMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for AddRoleToMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for RemoveMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for RemoveRoleFromMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreateRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildRoles&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateRolePositions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for UpdateGuildError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DeleteGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildChannels&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildInvites&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildPreview&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildVanityUrl&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildVoiceRegions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildWebhooks&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGuildWidget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateCurrentUserNick&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateGuildChannelPositions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateGuildWidget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogReasonError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGateway&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetGatewayAuthed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetVoiceRegions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetCurrentUserGuildsError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetCurrentUserGuilds&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for UpdateCurrentUserError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for UpdateCurrentUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CreatePrivateChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetCurrentUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetCurrentUserConnections&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetCurrentUserPrivateChannels&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for LeaveGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for GetUserApplicationInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Request","synthetic":true,"types":[]},{"text":"impl Sync for PathParseError","synthetic":true,"types":[]},{"text":"impl Sync for Path","synthetic":true,"types":[]},{"text":"impl Sync for Route","synthetic":true,"types":[]}];
implementors["twilight_lavalink"] = [{"text":"impl Sync for ClientError","synthetic":true,"types":[]},{"text":"impl Sync for Lavalink","synthetic":true,"types":[]},{"text":"impl Sync for OutgoingEvent","synthetic":true,"types":[]},{"text":"impl Sync for Destroy","synthetic":true,"types":[]},{"text":"impl Sync for Equalizer","synthetic":true,"types":[]},{"text":"impl Sync for EqualizerBand","synthetic":true,"types":[]},{"text":"impl Sync for Pause","synthetic":true,"types":[]},{"text":"impl Sync for Play","synthetic":true,"types":[]},{"text":"impl Sync for Seek","synthetic":true,"types":[]},{"text":"impl Sync for Stop","synthetic":true,"types":[]},{"text":"impl Sync for VoiceUpdate","synthetic":true,"types":[]},{"text":"impl Sync for SlimVoiceServerUpdate","synthetic":true,"types":[]},{"text":"impl Sync for Volume","synthetic":true,"types":[]},{"text":"impl Sync for IncomingEvent","synthetic":true,"types":[]},{"text":"impl Sync for PlayerUpdate","synthetic":true,"types":[]},{"text":"impl Sync for PlayerUpdateState","synthetic":true,"types":[]},{"text":"impl Sync for Stats","synthetic":true,"types":[]},{"text":"impl Sync for StatsCpu","synthetic":true,"types":[]},{"text":"impl Sync for StatsFrames","synthetic":true,"types":[]},{"text":"impl Sync for StatsMemory","synthetic":true,"types":[]},{"text":"impl Sync for TrackEventType","synthetic":true,"types":[]},{"text":"impl Sync for TrackEnd","synthetic":true,"types":[]},{"text":"impl Sync for TrackStart","synthetic":true,"types":[]},{"text":"impl Sync for Opcode","synthetic":true,"types":[]},{"text":"impl Sync for NodeError","synthetic":true,"types":[]},{"text":"impl Sync for NodeConfig","synthetic":true,"types":[]},{"text":"impl Sync for Resume","synthetic":true,"types":[]},{"text":"impl Sync for Node","synthetic":true,"types":[]},{"text":"impl Sync for PlayerManager","synthetic":true,"types":[]},{"text":"impl Sync for Player","synthetic":true,"types":[]},{"text":"impl Sync for LoadType","synthetic":true,"types":[]},{"text":"impl Sync for Track","synthetic":true,"types":[]},{"text":"impl Sync for TrackInfo","synthetic":true,"types":[]},{"text":"impl Sync for PlaylistInfo","synthetic":true,"types":[]},{"text":"impl Sync for LoadedTracks","synthetic":true,"types":[]},{"text":"impl Sync for FailingAddress","synthetic":true,"types":[]},{"text":"impl Sync for IpBlockType","synthetic":true,"types":[]},{"text":"impl Sync for IpBlock","synthetic":true,"types":[]},{"text":"impl Sync for RoutePlannerType","synthetic":true,"types":[]},{"text":"impl Sync for RoutePlanner","synthetic":true,"types":[]},{"text":"impl Sync for NanoIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Sync for NanoIpDetails","synthetic":true,"types":[]},{"text":"impl Sync for RotatingIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Sync for RotatingIpDetails","synthetic":true,"types":[]},{"text":"impl Sync for RotatingNanoIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Sync for RotatingNanoIpDetails","synthetic":true,"types":[]}];
implementors["twilight_mention"] = [{"text":"impl&lt;T&gt; Sync for MentionFormat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ParseMentionError&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for MentionIter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MentionType","synthetic":true,"types":[]}];
implementors["twilight_model"] = [{"text":"impl Sync for EmbedAuthor","synthetic":true,"types":[]},{"text":"impl Sync for EmbedField","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFooter","synthetic":true,"types":[]},{"text":"impl Sync for EmbedImage","synthetic":true,"types":[]},{"text":"impl Sync for EmbedProvider","synthetic":true,"types":[]},{"text":"impl Sync for EmbedThumbnail","synthetic":true,"types":[]},{"text":"impl Sync for EmbedVideo","synthetic":true,"types":[]},{"text":"impl Sync for Embed","synthetic":true,"types":[]},{"text":"impl Sync for StickerId","synthetic":true,"types":[]},{"text":"impl Sync for StickerPackId","synthetic":true,"types":[]},{"text":"impl Sync for StickerFormatType","synthetic":true,"types":[]},{"text":"impl Sync for StickerFormatTypeConversionError","synthetic":true,"types":[]},{"text":"impl Sync for Sticker","synthetic":true,"types":[]},{"text":"impl Sync for MessageActivity","synthetic":true,"types":[]},{"text":"impl Sync for MessageActivityType","synthetic":true,"types":[]},{"text":"impl Sync for MessageApplication","synthetic":true,"types":[]},{"text":"impl Sync for MessageFlags","synthetic":true,"types":[]},{"text":"impl Sync for MessageType","synthetic":true,"types":[]},{"text":"impl Sync for MessageReaction","synthetic":true,"types":[]},{"text":"impl Sync for MessageReference","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for PermissionOverwrite","synthetic":true,"types":[]},{"text":"impl Sync for PermissionOverwriteType","synthetic":true,"types":[]},{"text":"impl Sync for PermissionOverwriteTargetType","synthetic":true,"types":[]},{"text":"impl Sync for Attachment","synthetic":true,"types":[]},{"text":"impl Sync for CategoryChannel","synthetic":true,"types":[]},{"text":"impl Sync for ChannelMention","synthetic":true,"types":[]},{"text":"impl Sync for ChannelType","synthetic":true,"types":[]},{"text":"impl Sync for FollowedChannel","synthetic":true,"types":[]},{"text":"impl Sync for Group","synthetic":true,"types":[]},{"text":"impl Sync for PrivateChannel","synthetic":true,"types":[]},{"text":"impl Sync for Reaction","synthetic":true,"types":[]},{"text":"impl Sync for ReactionType","synthetic":true,"types":[]},{"text":"impl Sync for TextChannel","synthetic":true,"types":[]},{"text":"impl Sync for VoiceChannel","synthetic":true,"types":[]},{"text":"impl Sync for Webhook","synthetic":true,"types":[]},{"text":"impl Sync for WebhookType","synthetic":true,"types":[]},{"text":"impl Sync for ConversionError","synthetic":true,"types":[]},{"text":"impl Sync for Channel","synthetic":true,"types":[]},{"text":"impl Sync for GuildChannel","synthetic":true,"types":[]},{"text":"impl Sync for BotConnectionInfo","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionInfo","synthetic":true,"types":[]},{"text":"impl Sync for GatewayEvent","synthetic":true,"types":[]},{"text":"impl Sync for GatewayEventDeserializerOwned","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for GatewayEventDeserializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Connected","synthetic":true,"types":[]},{"text":"impl Sync for Connecting","synthetic":true,"types":[]},{"text":"impl Sync for Disconnected","synthetic":true,"types":[]},{"text":"impl Sync for Identifying","synthetic":true,"types":[]},{"text":"impl Sync for Payload","synthetic":true,"types":[]},{"text":"impl Sync for Reconnecting","synthetic":true,"types":[]},{"text":"impl Sync for Resuming","synthetic":true,"types":[]},{"text":"impl Sync for ShardEvent","synthetic":true,"types":[]},{"text":"impl Sync for DispatchEvent","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for DispatchEventWithTypeDeserializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for EventType","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for EventConversionError","synthetic":true,"types":[]},{"text":"impl Sync for Identify","synthetic":true,"types":[]},{"text":"impl Sync for IdentifyInfo","synthetic":true,"types":[]},{"text":"impl Sync for IdentifyProperties","synthetic":true,"types":[]},{"text":"impl Sync for ReactionRemoveEmoji","synthetic":true,"types":[]},{"text":"impl Sync for PartialEmoji","synthetic":true,"types":[]},{"text":"impl Sync for UserIdsError","synthetic":true,"types":[]},{"text":"impl Sync for RequestGuildMembers","synthetic":true,"types":[]},{"text":"impl Sync for RequestGuildMembersBuilder","synthetic":true,"types":[]},{"text":"impl Sync for RequestGuildMembersInfo","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for RequestGuildMemberId&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Resume","synthetic":true,"types":[]},{"text":"impl Sync for ResumeInfo","synthetic":true,"types":[]},{"text":"impl Sync for UpdateStatus","synthetic":true,"types":[]},{"text":"impl Sync for UpdateStatusInfo","synthetic":true,"types":[]},{"text":"impl Sync for BanAdd","synthetic":true,"types":[]},{"text":"impl Sync for BanRemove","synthetic":true,"types":[]},{"text":"impl Sync for ChannelCreate","synthetic":true,"types":[]},{"text":"impl Sync for ChannelDelete","synthetic":true,"types":[]},{"text":"impl Sync for ChannelPinsUpdate","synthetic":true,"types":[]},{"text":"impl Sync for ChannelUpdate","synthetic":true,"types":[]},{"text":"impl Sync for GuildCreate","synthetic":true,"types":[]},{"text":"impl Sync for GuildDelete","synthetic":true,"types":[]},{"text":"impl Sync for GuildEmojisUpdate","synthetic":true,"types":[]},{"text":"impl Sync for GuildIntegrationsUpdate","synthetic":true,"types":[]},{"text":"impl Sync for GuildUpdate","synthetic":true,"types":[]},{"text":"impl Sync for Heartbeat","synthetic":true,"types":[]},{"text":"impl Sync for InviteCreate","synthetic":true,"types":[]},{"text":"impl Sync for InviteDelete","synthetic":true,"types":[]},{"text":"impl Sync for MemberAdd","synthetic":true,"types":[]},{"text":"impl Sync for MemberChunk","synthetic":true,"types":[]},{"text":"impl Sync for MemberRemove","synthetic":true,"types":[]},{"text":"impl Sync for MemberUpdate","synthetic":true,"types":[]},{"text":"impl Sync for MessageCreate","synthetic":true,"types":[]},{"text":"impl Sync for MessageDelete","synthetic":true,"types":[]},{"text":"impl Sync for MessageDeleteBulk","synthetic":true,"types":[]},{"text":"impl Sync for MessageUpdate","synthetic":true,"types":[]},{"text":"impl Sync for PresenceUpdate","synthetic":true,"types":[]},{"text":"impl Sync for ReactionAdd","synthetic":true,"types":[]},{"text":"impl Sync for ReactionRemove","synthetic":true,"types":[]},{"text":"impl Sync for ReactionRemoveAll","synthetic":true,"types":[]},{"text":"impl Sync for Ready","synthetic":true,"types":[]},{"text":"impl Sync for RoleCreate","synthetic":true,"types":[]},{"text":"impl Sync for RoleDelete","synthetic":true,"types":[]},{"text":"impl Sync for RoleUpdate","synthetic":true,"types":[]},{"text":"impl Sync for TypingStart","synthetic":true,"types":[]},{"text":"impl Sync for UnavailableGuild","synthetic":true,"types":[]},{"text":"impl Sync for UpdateVoiceState","synthetic":true,"types":[]},{"text":"impl Sync for UserUpdate","synthetic":true,"types":[]},{"text":"impl Sync for VoiceServerUpdate","synthetic":true,"types":[]},{"text":"impl Sync for VoiceStateUpdate","synthetic":true,"types":[]},{"text":"impl Sync for WebhooksUpdate","synthetic":true,"types":[]},{"text":"impl Sync for Activity","synthetic":true,"types":[]},{"text":"impl Sync for ActivityAssets","synthetic":true,"types":[]},{"text":"impl Sync for ActivityEmoji","synthetic":true,"types":[]},{"text":"impl Sync for ActivityFlags","synthetic":true,"types":[]},{"text":"impl Sync for ActivityParty","synthetic":true,"types":[]},{"text":"impl Sync for ActivitySecrets","synthetic":true,"types":[]},{"text":"impl Sync for ActivityTimestamps","synthetic":true,"types":[]},{"text":"impl Sync for ActivityType","synthetic":true,"types":[]},{"text":"impl Sync for ClientStatus","synthetic":true,"types":[]},{"text":"impl Sync for Status","synthetic":true,"types":[]},{"text":"impl Sync for Presence","synthetic":true,"types":[]},{"text":"impl Sync for UserOrId","synthetic":true,"types":[]},{"text":"impl Sync for PresenceIntermediary","synthetic":true,"types":[]},{"text":"impl Sync for PresenceDeserializer","synthetic":true,"types":[]},{"text":"impl Sync for PresenceMapDeserializer","synthetic":true,"types":[]},{"text":"impl Sync for CloseCode","synthetic":true,"types":[]},{"text":"impl Sync for CloseCodeConversionError","synthetic":true,"types":[]},{"text":"impl Sync for Intents","synthetic":true,"types":[]},{"text":"impl Sync for OpCode","synthetic":true,"types":[]},{"text":"impl Sync for SessionStartLimit","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogChange","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogChangeKey","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogEntry","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogEvent","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogOptionalEntryInfo","synthetic":true,"types":[]},{"text":"impl Sync for PartialGuildIntegration","synthetic":true,"types":[]},{"text":"impl Sync for AuditLog","synthetic":true,"types":[]},{"text":"impl Sync for Member","synthetic":true,"types":[]},{"text":"impl Sync for MemberDeserializer","synthetic":true,"types":[]},{"text":"impl Sync for MemberMapDeserializer","synthetic":true,"types":[]},{"text":"impl Sync for Ban","synthetic":true,"types":[]},{"text":"impl Sync for DefaultMessageNotificationLevel","synthetic":true,"types":[]},{"text":"impl Sync for Emoji","synthetic":true,"types":[]},{"text":"impl Sync for ExplicitContentFilter","synthetic":true,"types":[]},{"text":"impl Sync for GuildInfo","synthetic":true,"types":[]},{"text":"impl Sync for GuildIntegration","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationAccount","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationApplication","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationExpireBehavior","synthetic":true,"types":[]},{"text":"impl Sync for MfaLevel","synthetic":true,"types":[]},{"text":"impl Sync for PartialGuild","synthetic":true,"types":[]},{"text":"impl Sync for PartialMember","synthetic":true,"types":[]},{"text":"impl Sync for Permissions","synthetic":true,"types":[]},{"text":"impl Sync for PremiumTier","synthetic":true,"types":[]},{"text":"impl Sync for GuildPreview","synthetic":true,"types":[]},{"text":"impl Sync for GuildPrune","synthetic":true,"types":[]},{"text":"impl Sync for Role","synthetic":true,"types":[]},{"text":"impl Sync for RoleTags","synthetic":true,"types":[]},{"text":"impl Sync for GuildStatus","synthetic":true,"types":[]},{"text":"impl Sync for SystemChannelFlags","synthetic":true,"types":[]},{"text":"impl Sync for UnavailableGuild","synthetic":true,"types":[]},{"text":"impl Sync for VerificationLevel","synthetic":true,"types":[]},{"text":"impl Sync for GuildWidget","synthetic":true,"types":[]},{"text":"impl Sync for Guild","synthetic":true,"types":[]},{"text":"impl Sync for ApplicationId","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentId","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogEntryId","synthetic":true,"types":[]},{"text":"impl Sync for ChannelId","synthetic":true,"types":[]},{"text":"impl Sync for EmojiId","synthetic":true,"types":[]},{"text":"impl Sync for GenericId","synthetic":true,"types":[]},{"text":"impl Sync for GuildId","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationId","synthetic":true,"types":[]},{"text":"impl Sync for MessageId","synthetic":true,"types":[]},{"text":"impl Sync for RoleId","synthetic":true,"types":[]},{"text":"impl Sync for UserId","synthetic":true,"types":[]},{"text":"impl Sync for WebhookId","synthetic":true,"types":[]},{"text":"impl Sync for InviteChannel","synthetic":true,"types":[]},{"text":"impl Sync for InviteGuild","synthetic":true,"types":[]},{"text":"impl Sync for InviteMetadata","synthetic":true,"types":[]},{"text":"impl Sync for TargetUserType","synthetic":true,"types":[]},{"text":"impl Sync for Invite","synthetic":true,"types":[]},{"text":"impl Sync for SkuId","synthetic":true,"types":[]},{"text":"impl Sync for TeamId","synthetic":true,"types":[]},{"text":"impl Sync for TeamMember","synthetic":true,"types":[]},{"text":"impl Sync for TeamMembershipState","synthetic":true,"types":[]},{"text":"impl Sync for Team","synthetic":true,"types":[]},{"text":"impl Sync for CurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl Sync for Connection","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionVisibility","synthetic":true,"types":[]},{"text":"impl Sync for CurrentUser","synthetic":true,"types":[]},{"text":"impl Sync for CurrentUserGuild","synthetic":true,"types":[]},{"text":"impl Sync for UserFlags","synthetic":true,"types":[]},{"text":"impl Sync for PremiumType","synthetic":true,"types":[]},{"text":"impl Sync for UserProfile","synthetic":true,"types":[]},{"text":"impl Sync for User","synthetic":true,"types":[]},{"text":"impl Sync for VoiceState","synthetic":true,"types":[]},{"text":"impl Sync for CloseCode","synthetic":true,"types":[]},{"text":"impl Sync for CloseCodeConversionError","synthetic":true,"types":[]},{"text":"impl Sync for OpCode","synthetic":true,"types":[]},{"text":"impl Sync for VoiceRegion","synthetic":true,"types":[]}];
implementors["twilight_standby"] = [{"text":"impl Sync for WaitForEventFuture","synthetic":true,"types":[]},{"text":"impl Sync for WaitForEventStream","synthetic":true,"types":[]},{"text":"impl Sync for WaitForGuildEventFuture","synthetic":true,"types":[]},{"text":"impl Sync for WaitForGuildEventStream","synthetic":true,"types":[]},{"text":"impl Sync for WaitForMessageFuture","synthetic":true,"types":[]},{"text":"impl Sync for WaitForMessageStream","synthetic":true,"types":[]},{"text":"impl Sync for WaitForReactionFuture","synthetic":true,"types":[]},{"text":"impl Sync for WaitForReactionStream","synthetic":true,"types":[]},{"text":"impl Sync for Standby","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()