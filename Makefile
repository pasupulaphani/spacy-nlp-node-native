LD_PRELOAD=/usr/lib64/libpython2.7.so
DEBUG=lib*
LD_PRELOAD=/usr/lib64/libpython2.7.so
PYTHONPATH=./test/support
REPORTER=spec

test:
	$(MAKE) DEBUG= test-debug

test-debug:
	DEBUG=$(DEBUG) \
	LD_PRELOAD=$(LD_PRELOAD) \
	PYTHONPATH=$(PYTHONPATH) \
	./node_modules/.bin/mocha -R $(REPORTER)

.PHONY: test test-debug
