FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
#COPY "./target/config.server-0.0.1-SNAPSHOT.jar" "config-server.jar"
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=dev","-jar","/app.jar"]
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=dev","-jar","/config-server.jar"]