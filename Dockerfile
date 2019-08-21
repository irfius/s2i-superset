FROM centos:7.6.1810

ENV LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    FLASK_APP=superset \
    APACHE_SUPERSET_VERSION=0.28.1 \
    SUPERSET_HOME=/superset

LABEL io.k8s.description="Apache Superset" \
      io.k8s.display-name="Apache Superset 0.28.1" \
      io.openshift.expose-services="8080:http,8125:http,6666:http" \
      io.openshift.tags="superset,python,apache" \
      maintainer="Irfius <irfius@tuta.io>" \
      io.openshift.s2i.scripts-url="image:///usr/libexec/s2i"

COPY .s2i/bin/ /usr/libexec/s2i
COPY requirements/ /superset
WORKDIR /superset

RUN yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm && \
    yum -y update && \
    INSTALL_PKGS="python36 python36-pip python36-devel" && \
    yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
    rpm -V $INSTALL_PKGS && \
    yum -y install postgresql-devel	mysql-devel gcc gcc-c++ cyrus-sasl-plain cyrus-sasl-devel && \
    pip3 install -U pip && \
    python3 -m venv .venv && \
    source .venv/bin/activate && \
    pip install -U pip && \
    pip install -r requirements.txt && \
    pip install -r requirements-mssql.txt && \
    rm -rf .cache && \
    chown -R 1001:1001 /superset && \
    chown -R 1001:1001 /var/lib/rpm/.dbenv.lock && \
    yum -y remove postgresql-devel	mysql-devel gcc gcc-c++ cyrus-sasl-plain cyrus-sasl-devel && \
    yum -y clean all --enablerepo='*'

USER 1001
EXPOSE 8080 8125 6666
CMD ["/usr/libexec/s2i/usage"]