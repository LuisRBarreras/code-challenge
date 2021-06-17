const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_KEY || 'https://a4c067c33003402b863e85aaff83d841@o310956.ingest.sentry.io/5820784',
  environment: process.env.NODE_ENV || 'development',
});

exports.captureException = (exception) => {
  Sentry.captureException(exception);
};
