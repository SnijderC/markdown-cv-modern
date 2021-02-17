.PHONY: build
build:
	mkdir -p ./build/static/files
	docker-compose build cv-build
	docker-compose run cv-build
	chown -R $(whoami):$(whoami) ./build
	yarn --cwd ./pdfprint install
	yarn --cwd ./pdfprint run start

.PHONY: serve
serve:
	docker-compose up cv-serve

.PHONY: clean
clean:
	rm -rf ./build/* .jekyll-cache _site

.PHONY: publish
publish:
	bash deploy.sh