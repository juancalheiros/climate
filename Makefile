setup: 
	@yarn 

build: 
	@yarn build

test: 
	@yarn test

run: 
	make setup && make build && yarn start