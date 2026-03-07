# Custom Spring Boot Starter

This project demonstrates how to create a **Custom Spring Boot Starter** and publish it so that it can be used in other Spring Boot applications via **Maven dependency**.

---

# Project Overview

The goal of this assignment is to:

- Create a **Custom Spring Boot Starter**
- Auto-configure a service using **Spring Boot Auto Configuration**
- Publish the starter to **Maven Central Repository**
- Use the starter dependency in another Spring Boot project

---

# Project Structure
```
custom-spring-boot-starter
│
├── src/main/java
│ └── com.example.starter
│ ├── config
│ │ └── GreetingAutoConfiguration.java
│ │
│ ├── properties
│ │ └── GreetingProperties.java
│ │
│ └── service
│ └── GreetingService.java
│
├── src/main/resources
│ └── META-INF
│ └── spring.factories
│
├── pom.xml
│
└── README.md
```
---

# Step 1: Create Maven Project

Create a Maven project with the following structure.

Example command:

mvn archetype:generate

Or create using **IntelliJ / Eclipse** as a **Maven project**.

---

# Step 2: Add Dependencies in pom.xml

Add Spring Boot dependencies.

```xml
<dependencies>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-autoconfigure</artifactId>
        <version>3.2.5</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-configuration-processor</artifactId>
        <optional>true</optional>
    </dependency>

</dependencies>
```
# Step 3: Create Greeting Service

Create a service class.
```.java
package com.example.starter.service;

public class GreetingService {

    private final String message;

    public GreetingService(String message) {
        this.message = message;
    }

    public String greet() {
        return message;
    }
}
```

# Step 4: Create Properties Class

Create configuration properties.

```.java
package com.example.starter.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "greeting")
public class GreetingProperties {

    private String message = "Hello from Custom Starter";

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
```

# Step 5: Create Auto Configuration

Create auto configuration class.
```.java
package com.example.starter.config;

import com.example.starter.properties.GreetingProperties;
import com.example.starter.service.GreetingService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(GreetingProperties.class)
public class GreetingAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public GreetingService greetingService(GreetingProperties properties) {
        return new GreetingService(properties.getMessage());
    }
}
```
# Step 6: Register Auto Configuration

Create file:
```
src/main/resources/META-INF/spring.factories
```

Add:
```
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.example.starter.config.GreetingAutoConfiguration
```
# Step 7: Build the Project

Run the following command:
```
mvn clean install
```
This will build the starter and install it into local Maven repository.

Location:

```C:\Users\<username>\.m2\repository```
# Step 8: Use the Starter in Another Spring Boot Project

Add dependency in another Spring Boot project.
```xml
<dependency>
    <groupId>io.github.ak2484</groupId>
    <artifactId>spring-boot-clean-response-starter</artifactId>
    <version>1.0.1</version>
    <scope>compile</scope>
</dependency>
```
# Step 9: Configure Application Properties

Add in application.properties.
```
greeting.message=Hello from My Spring Boot App
```
# Step 10: Use the Service in Controller

Example:
```.java
@RestController
public class TestController {

    private final GreetingService greetingService;

    public TestController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/greet")
    public String greet() {
        return greetingService.greet();
    }
}
```
Run the application and visit:

```http://localhost:8080/greet```

Output:

Hello from My Spring Boot App
#Step 11: Publish to Maven Central Repository

Follow these steps.

## 1. Create Sonatype Account

Go to:
```
https://issues.sonatype.org
```
Create an account.

## 2. Create New Project Ticket

Create a ticket requesting a new Maven namespace.

Example:
```
GroupId: com.example
Project: custom-spring-boot-starter
```
## 3. Generate GPG Keys

Install GPG.

Run:
```
gpg --gen-key
```
List keys:
```
gpg --list-keys
```
Export key:
```
gpg --keyserver keyserver.ubuntu.com --send-keys <KEY_ID>
```
## 4. Configure Maven Settings

Edit:
```
~/.m2/settings.xml
```
Add:
```xml
<servers>
    <server>
        <id>ossrh</id>
        <username>SONATYPE_USERNAME</username>
        <password>SONATYPE_PASSWORD</password>
    </server>
</servers>
```
## 5. Update pom.xml for Publishing

Add:
```xml
<distributionManagement>
    <snapshotRepository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
    </snapshotRepository>
    <repository>
        <id>ossrh</id>
        <url>https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
</distributionManagement>
```
## 6. Add Required Metadata

Add in pom.xml:
```xml
<name>custom-spring-boot-starter</name>
<description>Custom Spring Boot Starter Example</description>
<url>https://github.com/yourusername/custom-spring-boot-starter</url>

<licenses>
    <license>
        <name>MIT License</name>
        <url>https://opensource.org/licenses/MIT</url>
    </license>
</licenses>

<developers>
    <developer>
        <id>yourid</id>
        <name>Your Name</name>
    </developer>
</developers>

<scm>
    <connection>scm:git:git://github.com/yourusername/custom-spring-boot-starter.git</connection>
    <developerConnection>scm:git:ssh://github.com/yourusername/custom-spring-boot-starter.git</developerConnection>
    <url>https://github.com/yourusername/custom-spring-boot-starter</url>
</scm>
```
## 7. Deploy to Sonatype

Run:
```
mvn clean deploy
```
## 8. Release the Artifact

Go to:
```
https://s01.oss.sonatype.org
```
Login and release the staging repository.

## 9. Artifact Available in Maven Central

After release (usually 10–30 minutes), the dependency will be available in:
```
https://search.maven.org
```
Final Result

Now your custom starter can be used by anyone simply by adding:
```xml
<dependency>
    <groupId>io.github.ak2484</groupId>
    <artifactId>spring-boot-clean-response-starter</artifactId>
    <version>1.0.1</version>
    <scope>compile</scope>
</dependency>
```
