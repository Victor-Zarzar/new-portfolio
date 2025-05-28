# Makefile New-Portfolio
DOCKER_IMAGE_NAME = new-portfolio
DOCKER_CONTAINER_NAME = new-portfolio
PORT = 3000

install:
	@echo "📦 Installing dependencies with pnpm..."
	pnpm install
	@echo "✅ Dependencies installed."

run:
	@echo "🚀 Starting application on port $(PORT)..."
	docker-compose build 
	docker-compose up

stop:
	@echo "🛑 Stopping application..."
	docker-compose down
	@echo "🧹 Application stopped."

clean:
	@echo "🧼 Cleaning environment..."
	docker-compose down -v
	docker rmi -f $(DOCKER_IMAGE_NAME)
	rm -rf node_modules .next || true
	docker system prune -af
	@echo "✅ Environment cleaned."

docker-build:
	@echo "🐳 Building Docker image..."
	docker build -t $(DOCKER_IMAGE_NAME) .
	@echo "✅ Docker image built."

docker-run:
	@echo "📦 Starting Docker container on port $(PORT)..."
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p $(PORT):$(PORT) $(DOCKER_IMAGE_NAME)
	@echo "✅ Docker container started."

docker-stop:
	@echo "🛑 Stopping Docker container..."
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)
	@echo "✅ Docker container stopped and removed."

docker-clean: docker-stop
	@echo "🧽 Removing Docker image..."
	docker rmi $(DOCKER_IMAGE_NAME)
	@echo "✅ Docker image removed."

docker-logs:
	@echo "📄 Showing container logs..."
	docker logs -f $(DOCKER_CONTAINER_NAME)

docker-shell:
	@echo "🖥️  Accessing container shell..."
	docker exec -it $(DOCKER_CONTAINER_NAME) /bin/bash

help:
	@echo "📘 New-Portfolio Makefile"
	@echo "------------------------"
	@echo "Available commands:"
	@echo "  📦 make install        - Install the required dependencies"
	@echo "  🚀 make run            - Run application locally"
	@echo "  🛑 make stop           - Stop local application"
	@echo "  🧼 make clean          - Clean environment"
	@echo ""
	@echo "🐳 Docker Commands:"
	@echo "  🐳 make docker-build   - Build Docker image"
	@echo "  📦 make docker-run     - Run Docker container"
	@echo "  🛑 make docker-stop    - Stop and remove Docker container"
	@echo "  🧽 make docker-clean   - Remove Docker image"
	@echo "  📄 make docker-logs    - Show container logs"
	@echo "  🖥️  make docker-shell   - Access container shell"
