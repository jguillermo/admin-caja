.DEFAULT_GOAL := help

module: ## Generate module :make module m=dashboard
	@ng g m modules/${m} --routing --spec=false

module-component: ## Generate module and component :make module-component m=dashboard c=model1
	@ng g m modules/${m}/${c} --routing --spec=false
	@ng g c modules/${m}/${c} -m modules/${m}/${c}/${c}.module -is --spec=false

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'

