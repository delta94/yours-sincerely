# Enviroment Variables

| Environment Variable    | Config Name(name on the `config` file) | Description                                   |
|-------------------------|----------------------------------------|-----------------------------------------------|
| NODE_ENV                | .env                                   | Node Environment variable                     |
| PG_DATABASE             | .database.database                     | Postgres database name                        |
| PG_USERNAME             | .database.username                     | Postgres database username                    |
| PG_PASSWORD             | .database.password                     | Postgres database password                    |
| PG_HOST                 | .database.options.host                 | Postgres database host                        |
| PG_MAX_CONNECTIONS      | .database.options.pool.max             | Postgres number of max connections to be open |
| JWT_SECRET              | .jwtSecret                             | JWT secret                                    |
| STRIPE_CLIENT_ID        | .stripe.client_id                      | Stripe Client id                              |
| STRIPE_KEY              | .stripe.key                            | Stripe key                                    |
| STRIPE_SECRET           | .stripe.secret                         | Stripe secret                                 |
| AWS_KEY                 | .aws.key                               | AWS key                                       |
| AWS_SECRET              | .aws.secret                            | AWS secret                                    |
| AWS_S3_BUCKET           | .aws.bucket                            | AWS s3 bucket to send files                   |
| MAILGUN_USER            | .mailgun.user                          | mailgun user                                  |
| MAILGUN_API_KEY         | .mailgun.apiKey                        | mailgun password                              |
| API_URL                 | .host.api                              | API exposed url                               |
| WEBAPP_URL              | .host.webapp                           | webapp URL                                    |
| WEBSITE_URL             | .host.website                          | UI URL                                        |
| SLACK_HOOK_URL          | .slack.webhookUrl                      | slack hook url                                |
| GITHUB_CLIENT_ID        | .github.clientId                       | github client ID                              |
| GITHUB_CLIENT_SECRET    | .github.clientSecret                   | github client secret                          |
| MEETUP_CLIENT_ID        | .meetup.clientId                       | meetup client ID                              |
| MEETUP_CLIENT_SECRET    | .meetup.clientSecret                   | meetup client secret                          |
| TWITTER_CONSUMER_KEY    | .twitter.consumerKey                   | twitter key                                   |
| TWITTER_CONSUMER_SECRET | .twitter.consumerSecret                | twitter secret                                |
| ALGOLIA_APP_ID          | .algolia.appId                         | algolia APP id                                |
| ALGOLIA_KEY             | .algolia.appKey                        | algolia key                                   |
| ALGOLIA_INDEX           | .algolia.index                         | algolia index                                 |
