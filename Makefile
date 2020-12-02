.PHONY: build
build:
	docker-compose run cv-build

.PHONY: serve
serve:
	docker-compose up cv-serve

.PHONY: clean
clean:
	rm -rf ./build/* .jekyll-cache _site
