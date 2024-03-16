build:
	docker build -t docker.yesidlopez.de/portfolio:$(VERSION) --target production .

publish: build
publish:
	docker push docker.yesidlopez.de/portfolio:$(VERSION)

deploy:
	kubectl --kubeconfig ~/kubeconfig apply -f infra/deployment.yaml
	kubectl --kubeconfig ~/kubeconfig apply -f infra/service.yaml
