echo "$0" | docker login --username=_ --password-stdin registry.heroku.com;
heroku container:push web -a $1;
heroku container:release web -a $1;
