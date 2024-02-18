## How to use Faiss on Nodejs AWS Lambda

[Faiss](https://github.com/facebookresearch/faiss) is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's Fundamental AI Research group.

### build the function with esbuild using Makefile

```Makefile
build-TestFaissFunction:
    ...
# "Building function 'TestFaissFunction' with esbuild" and mark faiss-node as external
	./node_modules/.bin/esbuild --bundle --platform=node --minify --target=node20 --outfile=$(ARTIFACTS_DIR)/main.js main.ts --external:faiss-node
# "Copying faiss-node and its deps to $(ARTIFACTS_DIR)/node_modules"
	cp -r ./node_modules/faiss-node $(ARTIFACTS_DIR)/node_modules/faiss-node
	cp -r ./node_modules/bindings $(ARTIFACTS_DIR)/node_modules/bindings
	cp -r ./node_modules/file-uri-to-path $(ARTIFACTS_DIR)/node_modules/file-uri-to-path
```

### 1. SAM build (use-container)

```bash
sam build -u
```

### 2. test it locally

```bash
sam local invoke TestFaissFunction
```

result:

```bash
START RequestId: 03344b94-6926-4f68-979a-bda11e87cf0c Version: $LATEST
2024-02-18T11:20:14.514Z	3347e251-33ae-499f-819b-d02b9a4f18a4	INFO	2
2024-02-18T11:20:14.553Z	3347e251-33ae-499f-819b-d02b9a4f18a4	INFO	true
2024-02-18T11:20:14.553Z	3347e251-33ae-499f-819b-d02b9a4f18a4	INFO	0
2024-02-18T11:20:14.555Z	3347e251-33ae-499f-819b-d02b9a4f18a4	INFO	4
END RequestId: 3347e251-33ae-499f-819b-d02b9a4f18a4
REPORT RequestId: 3347e251-33ae-499f-819b-d02b9a4f18a4	Init Duration: 1.25 ms	Duration: 2010.18 ms	Billed Duration: 2011 ms	Memory Size: 128 MB	Max Memory Used: 128 MB
```

### 3. SAM deploy -g

```bash
sam deploy -g
```
