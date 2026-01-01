# STAGE 1: Build
FROM maven:3.8.6-openjdk-11 AS build
COPY . .
RUN mvn clean package -DskipTests

# STAGE 2: Run
FROM openjdk:11-jre-slim
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]