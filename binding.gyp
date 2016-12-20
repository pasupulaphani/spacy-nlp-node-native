{
    "targets": [
        {
            "target_name": "py_bindings",
            "sources": [
                "py_bindings.cc"
            ],
            "include_dirs" : [
 	 			"<!(node -e \"require('nan')\")"
			],
            "conditions": [
    	      [ 'OS=="linux" or OS=="freebsd" or OS=="openbsd" or OS=="solaris"', {
              "cflags": [
                "<!(python-config --cflags)",
                 "-std=c++11",
                 "-Xlinker -export-dynamic"
              ],
              "cflags!": [ "-fno-exceptions" ],
              "cflags_cc!": [ "-fno-exceptions" ],
              "libraries": [
                "<!(python-config --libs)"
              ]
            }],
            ['OS=="mac"', {
              "xcode_settings": {
                "OTHER_CFLAGS": [
                  "<!(python-config --cflags)"
                ],
                "OTHER_LDFLAGS": [
                  "<!(python-config --ldflags)"
                ]
              }
            }]
          ],
        }
    ]
}
