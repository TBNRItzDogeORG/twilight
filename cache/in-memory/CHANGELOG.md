# Changelog

Changelog for `twilight-cache-inmemory`.

## [0.2.6] - 2021-01-05

### Fixes

Update cached message's reactions when a Reaction Remove Emoji event is
processed ([#652] - [@sam-kirby]).

### Enhancements

Upgrade `dashmap` from version 3 to 4.0 ([#666] - [@vivian]).

[#666]: https://github.com/twilight-rs/twilight/pull/666
[#652]: https://github.com/twilight-rs/twilight/pull/652

## [0.2.5] - 2020-12-30

### Additions

Cache members from voice state updates ([#651] - [@sam-kirby]).

[#651]: https://github.com/twilight-rs/twilight/pull/651

## [0.2.4] - 2020-12-18

The MSRV is now set to Rust 1.48.

### Fixes

Update `InMemoryCache::clear` to actually clear all fields, as it was only
clearing some ([#639] - [@vivian]).

### Misc.

Replace documentation links with intra-doc links ([#524] - [@nickelc]).

## [0.2.3] - 2020-11-29

### Misc.

Use the renamed
`twilight_model::gateway::payload::identify::IdentityInfo::compress` model
field ([#624] - [@chamburr]).

## [0.2.2] - 2020-11-20

### Enhancements

Don't create useless HashSets in internal functions ([#591] - [@MaxOhn]).

## [0.2.1] - 2020-11-11

## Additions

Cache members and users received from new messages ([#590] - [@MaxOhn]).

## [0.2.0] - 2020-10-30

### Fixes

Correctly maintain relation sets for guilds. For example, the set of
the IDs of roles within a guild was not being inserted into with new
role IDs ([#540] - [@DusterTheFirst]).

Fix voice state map retaining user states, causing false duplicate voice states
for a single user ([#555] - [@DusterTheFirst]).

Properly track guilds' lists of their emojis ([#557] - [@DusterTheFirst]).

### Changes

The following model fields have been removed ([#532] - [@vivian]):
- `model::CachedGuild::{embed_channel_id, embed_enabled}`
- `model::CachedPresence::nick`

### Enhancements

Remove old and removed method of cache building in
documentation ([#576] - [@nickelc]).

## [0.2.0-beta.2] - 2020-10-22

### Fixes

Fix voice state map retaining user states, causing false duplicate voice states
for a single user ([#555] - [@DusterTheFirst]).

## [0.2.0-beta.1] - 2020-10-17

### Fixes

Correctly maintain relation sets for guilds. For example, the set of
the IDs of roles within a guild was not being inserted into with new
role IDs ([#540] - [@DusterTheFirst])

Correctly update guilds in `GuildUpdate` events
([#553] - [@DusterTheFirst])

## [0.2.0-beta.0] - 2020-10-10

This beta version of major version 0.2 of the crate includes changes needed to
support `twilight-model` 0.2.

### Changes

All changes in this version are from PR [#532].

The following model fields have been removed:
- `model::CachedGuild::{embed_channel_id, embed_enabled}`
- `model::CachedPresence::nick`

The crate now depends on version 0.2 of `twilight-model`.

## [0.1.1] - 2020-10-05

### Added

- Add methods to fetch guild relation ID sets ([#528] - [@Erk-])

## [0.1.0] - 2020-09-13

Initial release.

[@chamburr]: https://github.com/chamburr
[@DusterTheFirst]: https://github.com/DusterTheFirst
[@Erk-]: https://github.com/Erk-
[@MaxOhn]: https://github.com/MaxOhn
[@nickelc]: https://github.com/nickelc
[@sam-kirby]: https://github.com/sam-kirby
[@vivian]: https://github.com/vivian

[#639]: https://github.com/twilight-rs/twilight/pull/639
[#624]: https://github.com/twilight-rs/twilight/pull/624
[#591]: https://github.com/twilight-rs/twilight/pull/591
[#590]: https://github.com/twilight-rs/twilight/pull/590
[#576]: https://github.com/twilight-rs/twilight/pull/576
[#557]: https://github.com/twilight-rs/twilight/pull/557
[#555]: https://github.com/twilight-rs/twilight/pull/555
[#553]: https://github.com/twilight-rs/twilight/pull/553
[#540]: https://github.com/twilight-rs/twilight/pull/540
[#532]: https://github.com/twilight-rs/twilight/pull/532
[#528]: https://github.com/twilight-rs/twilight/pull/528
[#524]: https://github.com/twilight-rs/twilight/pull/524

[0.2.6]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.6
[0.2.5]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.5
[0.2.4]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.4
[0.2.3]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.3
[0.2.2]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.2
[0.2.1]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.1
[0.2.0]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.0
[0.2.0-beta.2]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.0-beta.2
[0.2.0-beta.1]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.0-beta.1
[0.2.0-beta.0]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.2.0-beta.0
[0.1.1]: https://github.com/twilight-rs/twilight/releases/tag/cache-in-memory-v0.1.1
[0.1.0]: https://github.com/twilight-rs/twilight/releases/tag/v0.1.0
