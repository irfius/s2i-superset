# s2i-superset
Apache Superset 0.28.1 on openshift

### Build/Installation
To build this image locally with s2i:
```sh
$ docker pull irfius/s2i-py368-centos7:1
$ git pull https://github.com/irfius/s2i-superset.git
$ s2i build superset0281/ irfius/s2i-py368-centos7:1 superset:0.28.1
```

### Installation
TODO