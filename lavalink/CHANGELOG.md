# Changelog

Changelog for `twilight-lavalink`.

## [0.2.2] - 2021-01-05

### Enhancements

Upgrade `dashmap` from version 3 to 4.0 ([#666] - [@vivian]).

[#666]: https://github.com/twilight-rs/twilight/pull/666

## [0.2.1] - 2020-11-02

Update the installation instructions to note version 0.2 instead of
version 0.1 ([#588] - [@vivian]).

## [0.2.0] - 2020-10-30

This major version bump of the Lavalink client is primarily done to match all of
the other crates in the ecosystem receiving a major version bump. There are no
significant API changes.

### Enhancements

Update `async-tungstenite` from ^0.8 to ^0.9.3, switching the RusTLS feature
selection from `async-tungstenite/async-tls` to `async-tungstenite/tokio-rustls`
to reduce dependency count ([#548], [#560] - [@nickelc]).

## [0.2.0-beta.1] - 2020-10-23

### Enhancements

Update `async-tungstenite` from ^0.8 to ^0.9.3, switching the RusTLS feature
selection from `async-tungstenite/async-tls` to `async-tungstenite/tokio-rustls`
to reduce dependency count ([#548] - [@nickelc]).

## [0.2.0-beta.0] - 2020-10-10

This major version bump of the Lavalink client is done to match all of the other
crates in the ecosystem receiving a major version bump. There are no changes.

## [0.1.1] - 2020-09-20

### Fixes

- Correct type of `http::PlaylistInfo::selected_track` ([#518] - [@MOZGIII])

## [0.1.0] - 2020-09-13

Initial release.

[@MOZGIII]: https://github.com/MOZGIII
[@nickelc]: https://github.com/nickelc
[@vivian]: https://github.com/vivian

[#588]: https://github.com/twilight-rs/twilight/pull/588
[#560]: https://github.com/twilight-rs/twilight/pull/560
[#548]: https://github.com/twilight-rs/twilight/pull/548
[#518]: https://github.com/twilight-rs/twilight/pull/518

[0.2.2]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.2.2
[0.2.1]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.2.1
[0.2.0]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.2.0
[0.2.0-beta.1]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.2.0-beta.1
[0.2.0-beta.0]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.2.0-beta.0
[0.1.1]: https://github.com/twilight-rs/twilight/releases/tag/lavalink-v0.1.1
[0.1.0]: https://github.com/twilight-rs/twilight/releases/tag/v0.1.0
