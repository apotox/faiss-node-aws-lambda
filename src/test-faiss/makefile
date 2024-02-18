build-TestFaissFunction:
	npm run clean-install
	mkdir -p $(ARTIFACTS_DIR)/node_modules
	./node_modules/.bin/esbuild --bundle --platform=node --minify --target=node20 --outfile=$(ARTIFACTS_DIR)/main.js main.ts --external:faiss-node
	cp -r ./node_modules/faiss-node $(ARTIFACTS_DIR)/node_modules/faiss-node
	cp -r ./node_modules/bindings $(ARTIFACTS_DIR)/node_modules/bindings
	cp -r ./node_modules/file-uri-to-path $(ARTIFACTS_DIR)/node_modules/file-uri-to-path
