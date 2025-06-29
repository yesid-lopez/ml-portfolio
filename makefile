PUSH_FLAG ?=

build:
	docker buildx build --platform linux/amd64,linux/arm64 -t registry.yesidlopez.de/portfolio:$(IMAGE_TAG) --target production $(PUSH_FLAG) .

publish:
	$(MAKE) build PUSH_FLAG=--push

deploy:
	kubectl --kubeconfig ~/kubeconfig apply -f infra/deployment.yaml
	kubectl --kubeconfig ~/kubeconfig apply -f infra/service.yaml
