
.PHONY: dev
dev:
	cargo run & cd client && npm run start

.PHONY: server
server:
	cargo run

.PHONY: front
front: 
	cd client && npm run start