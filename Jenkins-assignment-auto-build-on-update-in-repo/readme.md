# Spring Boot Calculator – Jenkins CI Integration

## Project Objective

This project demonstrates Continuous Integration (CI) using **GitHub and Jenkins**.

Whenever code is pushed to the GitHub repository, Jenkins automatically:

* Pulls the latest code
* Builds the project using Maven
* Executes the application
* Displays the output in Jenkins console

---

## Project Description

This is a Spring Boot based Calculator application that performs:

* Addition
* Subtraction
* Multiplication
* Division

The results are printed in the console using `CommandLineRunner`.

---

## Technologies Used

* Java 17
* Spring Boot
* Maven (Wrapper - mvnw)
* Jenkins
* GitHub
* Windows

---

## Project Structure

```
calculator-main
│
├── src
│   ├── main
│   │   └── java
│   │       └── com.example.calculator
│   │           ├── Calculator.java
│   │           └── CalculatorMainApplication.java
│   └── test
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

## Jenkins Configuration Steps

### 1. Create a Freestyle Job

* Open Jenkins
* Click **New Item**
* Enter name: `CalculatorJob`
* Select **Freestyle Project**

---

### 2. Configure Source Code Management

* Select **Git**
* Repository URL:

```
https://github.com/<your-username>/calculator-main.git
```

* Branch:

```
*/master   (or main)
```

---

### 3. Configure Build Trigger

**Option 1 (Recommended for local Jenkins):**
Enable:

```
Poll SCM
Schedule: H/1 * * * *
```

This checks GitHub every minute for changes.

**Option 2 (Webhook):**

* Enable: GitHub hook trigger for GITScm polling
* Add webhook in GitHub:

```
http://<jenkins-url>:8080/github-webhook/
```

---

### 4. Build Step

Add **Execute Windows batch command**:

```
echo Building Spring Boot project...

mvnw.cmd clean package -DskipTests

echo Running application...

for %%f in (target\*.jar) do java -jar "%%f"
```

---

## Expected Jenkins Output

```
Calculator() called...
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
Finished: SUCCESS
```

---

## How CI Works

1. Developer pushes code to GitHub
2. Jenkins detects changes (Webhook/Poll SCM)
3. Jenkins pulls latest code
4. Maven builds the project
5. Spring Boot application runs
6. Output is displayed in Jenkins console

---

## Notes

* Tests are skipped using `-DskipTests` to avoid build failure during demo.
* Project uses Maven Wrapper (`mvnw`) so Maven installation is not required.
* Jenkins runs the job automatically after every push.

---

## Author

Akash Nahak
