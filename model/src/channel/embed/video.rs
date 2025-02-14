use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Eq, Hash, PartialEq, Serialize)]
pub struct EmbedVideo {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub height: Option<u64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub url: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub width: Option<u64>,
}

#[cfg(test)]
mod tests {
    use super::EmbedVideo;
    use serde_test::Token;

    #[test]
    fn test_embed_video() {
        let value = EmbedVideo {
            height: Some(1440),
            url: Some("https://cdn.example.com/1-hash.mp4".to_owned()),
            width: Some(2560),
        };

        serde_test::assert_tokens(
            &value,
            &[
                Token::Struct {
                    name: "EmbedVideo",
                    len: 3,
                },
                Token::Str("height"),
                Token::Some,
                Token::U64(1440),
                Token::Str("url"),
                Token::Some,
                Token::Str("https://cdn.example.com/1-hash.mp4"),
                Token::Str("width"),
                Token::Some,
                Token::U64(2560),
                Token::StructEnd,
            ],
        );
    }
}
