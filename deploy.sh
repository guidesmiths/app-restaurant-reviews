echo "$HEROKU_API_KEY" | docker login --username=_ --password-stdin registry.heroku.com;
heroku container:push web -a $APP_NAME;
heroku container:release web -a $APP_NAME;
