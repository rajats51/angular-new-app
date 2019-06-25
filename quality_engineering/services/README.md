# Services and API testing tools for the Quality Framework as a Service tool

https://confluence.pncint.net/display/STR

## Running Karate tests through gradlew

**TODO: follow a similar pattern to the README.md in the `ui` directory**

## Installing gradlew for running Karate  tests

Please navigate to this Confluence page in your browser and follow the instructions for installing gradlew for your local environment:

```
https://confluence.pncint.net/display/STR/Setting+up+gradlew
```

**Prerequisites:**


What things you need to install the software and how to install them



In order to run this project, you will need `gradle-wrapper.jar`. It should be installed in `quality_engineering/ui/gradle/wrapper/` and `quality_engineering/services/gradle/wrapper/`

You can download the `gradle-wrapper.jar` from here. https://connections.pncint.net/files/form/anonymous/api/library/76c36eda-18fc-4268-ae4e-a1db9d08e5bd/document/baf4604a-ba86-4e0e-8daa-c44d4f8c8cda/media/gradle-wrapper.zip


## Running Karate tests through `gradlew`

In git bash cd into your services folder within the quality_engineering directory in your project:

```
cd /quality_engineering/services
```

Run this gradle command to execute Karate tests:

```
./gradlew clean test
```

More information about using karate can be found here:

https://confluence.pncint.net/display/STR/Karate+Introduction

https://intuit.github.io/karate/