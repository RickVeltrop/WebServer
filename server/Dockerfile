FROM rust:1.72.1
WORKDIR /app/Server

COPY . .

RUN cargo install --path .

CMD cargo run
