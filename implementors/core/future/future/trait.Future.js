(function() {var implementors = {};
implementors["twilight_http"] = [{"text":"impl Future for CreateInvite&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteInvite&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetChannelInvites&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetInvite&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateMessage&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CrosspostMessage&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetChannelMessages&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetChannelMessagesConfigured&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateMessage&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteMessage&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteMessages&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetMessage&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetReactions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateReaction&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteAllReaction&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteAllReactions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteReaction&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateWebhook&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteWebhook&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for ExecuteWebhook&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetChannelWebhooks&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetWebhook&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateWebhook&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateWebhookWithToken&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreatePin&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateTypingTrigger&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteChannelPermissionConfigured&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeletePin&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for FollowNewsChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetPins&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateChannelPermissionConfigured&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateBan&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteBan&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetBan&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetBans&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateGuild&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateGuildChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateGuildPrune&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateEmoji&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteEmoji&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetEmoji&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetEmojis&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateEmoji&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetAuditLog&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildPruneCount&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateGuildIntegration&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteGuildIntegration&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildIntegrations&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for SyncGuildIntegration&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateGuildIntegration&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildMembers&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateGuildMember&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for AddRoleToMember&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetMember&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for RemoveMember&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for RemoveRoleFromMember&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreateRole&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteRole&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildRoles&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateRole&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateRolePositions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateGuild&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for DeleteGuild&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuild&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildChannels&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildInvites&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildPreview&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildVanityUrl&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildVoiceRegions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildWebhooks&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGuildWidget&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateCurrentUserNick&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateGuildChannelPositions&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateGuildWidget&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetCurrentUserGuilds&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for UpdateCurrentUser&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for CreatePrivateChannel&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetCurrentUser&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetCurrentUserConnections&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetCurrentUserPrivateChannels&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetUser&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for LeaveGuild&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGateway&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetGatewayAuthed&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetUserApplicationInfo&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Future for GetVoiceRegions&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["twilight_standby"] = [{"text":"impl Future for WaitForEventFuture","synthetic":false,"types":[]},{"text":"impl Future for WaitForGuildEventFuture","synthetic":false,"types":[]},{"text":"impl Future for WaitForMessageFuture","synthetic":false,"types":[]},{"text":"impl Future for WaitForReactionFuture","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()