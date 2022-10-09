FROM openjdk:8
RUN apt update -y
COPY truetryout-0.0.1-SNAPSHOT.jar /truetryout-0.0.1-SNAPSHOT.jar
COPY run.sh /run.sh
RUN chmod +x /run.sh
ENTRYPOINT ["/run.sh"]
