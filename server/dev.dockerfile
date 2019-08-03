FROM rust

WORKDIR /app

# dev specific to auto reload
RUN cargo install systemfd cargo-watch

COPY src src
COPY Cargo.toml Cargo.toml
COPY Cargo.lock Cargo.lock

CMD systemfd --no-pid -s http::0.0.0.0:5000 -- cargo watch -x run
