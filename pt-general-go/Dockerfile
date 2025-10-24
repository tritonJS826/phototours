FROM golang:1.25-alpine AS build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

RUN ls -la
COPY . .

# Сборка оптимизированного бинарника:
# - CGO_ENABLED=0 — отключаем C-библиотеки, делаем статическую сборку
# - GOOS=linux, GOARCH=amd64 — целевая ОС и архитектура
# - -trimpath — убираем пути к исходникам из бинарника
# - -ldflags="-s -w" — уменьшаем размер, убирая символы и отладочную инфу
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o pt-general-go ./cmd/main.go

FROM scratch AS production
WORKDIR /root/

COPY --from=build /app/pt-general-go .
RUN ls -la
COPY .env .env

EXPOSE 8000
ENTRYPOINT ["./pt-general-go"]

