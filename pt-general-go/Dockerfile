FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
# CGO_ENABLED=0 - отключает CGO, создает статический бинарник без зависимостей от C библиотек
# -ldflags="-w -s" - флаги для линкера:
#   -w - удаляет отладочную информацию DWARF (уменьшает размер)
#   -s - удаляет таблицу символов и отладочную информацию (дополнительно уменьшает размер)
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o pt-general-go ./cmd/main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/pt-general-go .
CMD ["./pt-general-go"]
