all : help

help : 
	# up                コンテナの起動
	# stop              コンテナの停止
	# restart           コンテナの再起動
	# build             環境構築

up :
	docker-compose up -d

stop :
	docker-compose stop

reset : stop up

build :
	docker-compose build --no-cache
	docker-compose run --rm app sh -c 'npm install'
