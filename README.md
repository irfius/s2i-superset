# s2i-superset
Apache Superset 0.34.0 on openshift

### To build Build
To build this image locally with s2i:
```sh
$ git pull https://github.com/irfius/s2i-superset.git
$ docker build -t irfius/openshift-superset:1 .
$ s2i build superset/ irfius/openshift-superset:1 irfius/s2i-superset:0.34.0
```

### Running the application with docker-compose 
TODO

### Running the application with openshift 
TODO