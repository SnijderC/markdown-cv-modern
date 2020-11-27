.PHONY: build
build:
	docker-compose run cv jekyll build -d /build

.PHONY: serve
serve:
	docker-compose up

.PHONY: clean
clean:
	rm -rf ./build/*
