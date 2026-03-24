# Makefile - My-Portfolio
PROJECT_NAME= My Portfolio
DOCKER_IMAGE_NAME = my-portfolio
DOCKER_CONTAINER_NAME = my-portfolio
PORT = 3000
DOCKER_TAG = 1.0.5
REDIS_CONTAINER_NAME = redis
REDIS_TAG = 8-alpine

install:
	bun install

redis-server:
	docker run --rm -d \
		--name $(REDIS_CONTAINER_NAME) \
		-p 6379:6379 \
		redis:$(REDIS_TAG)

redis-logs:
	docker logs -f $(REDIS_CONTAINER_NAME)

dev: install
	bun run dev

prod: install
	bun run build && bun run start

build: redis-server
	docker build -t $(DOCKER_IMAGE_NAME):$(DOCKER_TAG) .

run: build
	docker run --rm -it \
		--name $(DOCKER_CONTAINER_NAME) \
		-p $(PORT):3000 \
		-v $(PWD):/app \
		-v /app/node_modules \
		-v /app/.next \
		$(DOCKER_IMAGE_NAME):$(DOCKER_TAG)

stop:
	docker stop $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker stop $(REDIS_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker rm $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	docker rm $(REDIS_CONTAINER_NAME) >/dev/null 2>&1 || true

clean: stop
	docker rmi -f $(DOCKER_IMAGE_NAME):$(DOCKER_TAG) >/dev/null 2>&1 || true
	docker rmi -f $(REDIS_CONTAINER_NAME):$(REDIS_TAG) >/dev/null 2>&1 || true
	rm -rf node_modules .next >/dev/null 2>&1 || true

logs:
	docker logs -f $(DOCKER_CONTAINER_NAME)

shell:
	docker exec -it $(DOCKER_CONTAINER_NAME) sh

generate:
	docker exec -it $(DOCKER_CONTAINER_NAME) bun run drizzle-kit generate

migrate:
	docker exec -it $(DOCKER_CONTAINER_NAME) bun run drizzle-kit migrate

studio:
	docker exec -it $(DOCKER_CONTAINER_NAME) bun run drizzle-kit studio

test: build
	docker run --rm \
		--name $(DOCKER_CONTAINER_NAME)-test \
		-v $(PWD):/app \
		-v /app/node_modules \
		-w /app \
		$(DOCKER_IMAGE_NAME):$(DOCKER_TAG) \
		bun run test

help:
	@echo ""
	@echo "$(PROJECT_NAME) v$(DOCKER_TAG)"
	@echo "──────────────────────────────────────────────"
	@echo ""
	@echo "Local Commands:"
	@echo "  make install          Install dependencies using bun"
	@echo "  make dev              Run the app locally in development mode"
	@echo ""
	@echo "Production Commands:"
	@echo "  make prod             Run the app in production mode (Test local)"
	@echo ""
	@echo "Docker Commands:"
	@echo "  make build            Build the Docker image"
	@echo "  make run              Run the Docker container"
	@echo "  make generate         Generate database schema"
	@echo "  make migrate          Run database migrations"
	@echo "  make studio           Open Drizzle Studio"
	@echo "  make stop             Stop and remove the container"
	@echo "  make test             Run the automated tests (Isolated Docker container)"
	@echo "  make clean            Remove image and clean environment"
	@echo "  make logs             Show container logs"
	@echo "  make shell            Access container shell"
	@echo "  make redis-server     Run Redis server"
	@echo "  make redis-logs       Show Redis logs"
	@echo ""
