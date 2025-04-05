up:
	sudo docker compose up -d

build:
	sudo docker compose up -d --build

down:
	docker compose down

migrate:
	docker exec -it nextjs-app npm run migrate

seed:
	docker exec -it nextjs-app npm run migrate:seed

