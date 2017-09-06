# docker-test

docker build -t nodeapp .

docker run -p 3888:3888  -d --name nodeapp nodeapp

docker ps

docker logs nodeapp

docker exec -it nodeapp sh

docker stop nodeapp

docker start nodeapp

docker rm nodeapp

