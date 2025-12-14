test:
	@echo "Starting unit tests..."
	go test --count=1 --short -v ./...
	@echo "Starting integration tests..."
	docker compose -f ./tests/test.docker-compose.yml up -d
	@echo "Waiting for services to start..."
	@sleep 5
	@echo "Running tests..."
	@trap 'docker compose -f ./tests/test.docker-compose.yml down -v' EXIT; go test -v -count=1 ./tests

lint:
	golangci-lint run

db:
	sqlc generate

run:
	go run cmd/main.go

build:
	go build cmd/main.go

swag:
	swag init -g cmd/main.go
