FROM rust as builder

# muslc is required in order to build the rust image.
RUN apt-get update && apt-get -y install ca-certificates cmake musl-tools libssl-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN rustup target add x86_64-unknown-linux-musl
# Sets the environment variable for the cargo build command that follows.
ENV PKG_CONFIG_ALLOW_CROSS=1

COPY . .
RUN cargo build --target x86_64-unknown-linux-musl --release

FROM alpine:3.8

RUN apk --no-cache add ca-certificates 
COPY --from=builder /app/target/x86_64-unknown-linux-musl/release/first-actix .

CMD ./first-actix