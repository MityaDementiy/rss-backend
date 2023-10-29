install:
	npm install

start:
	npm run start

docker-build:
	docker build -t rss-backend .

docker-run: docker-build
	docker run -p 8080:8080 rss-backend