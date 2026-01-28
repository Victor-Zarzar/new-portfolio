# Makefile - New-Portfolio
DOCKER_IMAGE_NAME = new-portfolio
DOCKER_CONTAINER_NAME = new-portfolio
PORT = 3000
DOCKER_TAG = 1.0.0

install:
	bun install

dev: install
	bun run dev

prod:
	bun run build

build:
	docker build -t $(DOCKER_IMAGE_NAME):$(DOCKER_TAG) .

run: build
	docker run -d \
		--name $(DOCKER_CONTAINER_NAME) \
		-p $(PORT):3000 \
		-v $(PWD):/app \
		-v /app/node_modules \
		-v /app/.next \
		$(DOCKER_IMAGE_NAME):$(DOCKER_TAG)

stop:
	docker stop $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker rm $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true

clean:
	docker stop $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker rm $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker rmi -f $(DOCKER_IMAGE_NAME) >/dev/null 2>&1 || true
	docker system prune -af >/dev/null 2>&1 || true
	sudo rm -rf node_modules .next >/dev/null 2>&1 || true

logs:
	docker logs -f $(DOCKER_CONTAINER_NAME)

shell:
	docker exec -it $(DOCKER_CONTAINER_NAME) sh

test: build
	docker run --rm \
		--name $(DOCKER_CONTAINER_NAME)-test \
		$(DOCKER_IMAGE_NAME):$(DOCKER_TAG) \
		bun run test

help:
	@echo ""
	@echo "New-Portfolio Makefile ($(DOCKER_TAG))"
	@echo "====================================="
	@echo ""
	@echo "Local Commands:"
	@echo "  make install          Install dependencies using bun"
	@echo "  make dev              Run the app locally in development mode"
	@echo ""
	@echo "Production Commands:"
	@echo "  bun run build        Run the app in production mode"
	@echo ""
	@echo "Docker Commands:"
	@echo "  make build            Build the Docker image"
	@echo "  make run              Run the Docker container"
	@echo "  make stop             Stop and remove the container"
	@echo "  make test             Run the automated tests (Isolated Docker container)"
	@echo "  make clean            Remove image and clean environment"
	@echo "  make logs             Show container logs"
	@echo "  make shell            Access container shell"
	@echo ""
