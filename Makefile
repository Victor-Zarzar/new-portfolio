# Makefile - New-Portfolio
DOCKER_IMAGE_NAME = new-portfolio
DOCKER_CONTAINER_NAME = new-portfolio
PORT = 3000

install:
	@echo "Installing dependencies with pnpm..."
	pnpm install
	@echo "Dependencies installed successfully."

dev:
	@echo "Starting local development server on port $(PORT)..."
	pnpm run dev

build:
	@echo "Building Docker image..."
	docker build -t $(DOCKER_IMAGE_NAME) .
	@echo "Docker image built successfully."

run: build
	@echo "Running Docker container on port $(PORT)..."
	docker run -d \
		--name $(DOCKER_CONTAINER_NAME) \
		-p $(PORT):3000 \
		-v $(PWD):/app \
		-v /app/node_modules \
		$(DOCKER_IMAGE_NAME)
	@echo "Docker container started successfully."

stop:
	@echo "Stopping and removing Docker container..."
	-@docker stop $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	-@docker rm $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	@echo "Docker container stopped and removed."

clean:
	@echo "Cleaning Docker environment..."
	-@docker stop $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	-@docker rm $(DOCKER_CONTAINER_NAME) >/dev/null 2>&1 || true
	-@docker rmi -f $(DOCKER_IMAGE_NAME) >/dev/null 2>&1 || true
	-@docker system prune -af >/dev/null 2>&1 || true
	-@sudo rm -rf node_modules .next >/dev/null 2>&1 || true
	@echo "Docker environment cleaned."

logs:
	@echo "Displaying container logs..."
	docker logs -f $(DOCKER_CONTAINER_NAME)

shell:
	@echo "Accessing container shell..."
	docker exec -it $(DOCKER_CONTAINER_NAME) sh

help:
	@echo ""
	@echo "New-Portfolio Makefile"
	@echo "=========================="
	@echo "Local Commands:"
	@echo "  make install         Install dependencies using pnpm"
	@echo "  make dev             Run the app locally in development mode"
	@echo ""
	@echo "Docker Commands:"
	@echo "  make build           Build the Docker image"
	@echo "  make run             Run the Docker container"
	@echo "  make stop            Stop and remove the container"
	@echo "  make clean           Remove image and clean environment"
	@echo "  make logs            Show container logs"
	@echo "  make shell           Access container shell"
	@echo ""
