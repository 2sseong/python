# 베이스 이미지
FROM ubuntu:22.04

# 메타데이터 추가
LABEL maintainer="lsh999051@gmail.com"

RUN apt update -y &&\
      apt install -y sudo passwd openssh-server wget &&\
      apt install -y nano net-tools &&\
      apt install -y iputils-ping openjdk-8-jdk python3-pip &&\
      apt clean &&\
      rm -rf /var/lib/apt/lists/*  

# 계정생성 및 세팅	
RUN groupadd pksh && useradd -m -d /home/pksh -s /bin/bash -g pksh -G sudo pksh &&\
      echo "pksh:1234" | chpasswd &&\
      mkdir -p /home/pksh/.ssh &&\
      chown -R pksh:pksh /home/pksh &&\
      echo "export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" >> /home/pksh/.bashrc &&\
      #오류안뜨게 하기
      echo "export PATH=$PATH:/home/pksh/.local/bin" >> /home/pksh/.bashrc &&\
      # 권한주기
      chown pksh:pksh /home/pksh/.bashrc &&\ 
      mkdir -p /var/run/sshd &&\
      echo "PermitRootLogin no" >> /etc/ssh/sshd_config &&\
      echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config

#사용자 변경
USER pksh

#작업환경 변경
WORKDIR /home/pksh

# pip 업그레이드 및 주피터랩 설치
RUN pip install --upgrade pip && pip install jupyterlab

# ssh 서버 실행 및 주피터랩 가동(외부접속가능)
CMD ["/bin/bash","-c","service ssh start && python3 -m jupyterlab --ip=0.0.0.0 --port=8888 --allow-root"]