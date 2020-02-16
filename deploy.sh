echo "$1" | docker login --username=_ --password-stdin registry.heroku.com;
heroku container:push web -a $2;
heroku container:release web -a $2;
