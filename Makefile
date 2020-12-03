.PHONY: build
build:
	docker-compose build cv-build
	docker-compose run cv-build
	mkdir build/static/files
	yarn --cwd ./pdfprint install
	yarn --cwd ./pdfprint run start

.PHONY: serve
serve:
	docker-compose build cv-serve
	docker-compose up cv-serve

.PHONY: clean
clean:
	rm -rf ./build/* .jekyll-cache _site
