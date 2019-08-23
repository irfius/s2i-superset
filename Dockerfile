FROM centos:7.6.1810

ENV LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    FLASK_APP=superset \
    APACHE_SUPERSET_VERSION=0.34.0 \
    SUPERSET_HOME=/superset \
    PY_DEPS="postgresql-devel mysql-devel gcc gcc-c++ cyrus-sasl-plain cyrus-sasl-devel" \
    PY368="python36 python36-pip python36-devel" \
    PIPENV_VENV_IN_PROJECT=yes \
    PATH=/superset/bin:$PATH \
    PYTHONPATH=/

LABEL io.k8s.description="Apache Superset" \
      io.k8s.display-name="Apache Superset 0.34.0" \
      io.openshift.expose-services="8088:http,8125:http,8081:http" \
      io.openshift.tags="superset,python,apache" \
      maintainer="Irfius <irfius@tuta.io>" \
      io.openshift.s2i.scripts-url="image:///usr/libexec/s2i"

WORKDIR /superset
COPY .s2i/bin/ /usr/libexec/s2i
COPY Pipfile /superset

RUN curl https://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-7Server -o /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7Server && \
    curl https://dl.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-7 -o /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7 && \ 
    rpm --import /etc/pki/rpm-gpg/* && \
    yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm && \
    yum -y update && \
    yum install -y --setopt=tsflags=nodocs $PY_DEPS && \
    yum install -y --setopt=tsflags=nodocs $PY368 && \
    pip3 install pipenv && \
    pipenv install --skip-lock && \
    rm -rf .cache && \
    chown -R 1001:1001 /superset && \
    chown -R 1001:1001 /var/lib/rpm/.dbenv.lock && \
    yum -y remove $PY_DEPS && \
    yum -y clean all --enablerepo='*'

USER 1001
EXPOSE 8088 8125 8081
CMD ["/usr/libexec/s2i/usage"]