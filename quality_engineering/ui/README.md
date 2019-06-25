# UI testing tools for the Quality Framework as a Service tool

More information about the framework can be found here.
https://confluence.pncint.net/display/STR

This tool uses selenium and cucumber to drive automated tests

**TODO: This should look very similar to the readme in the mtp-selenium-automation-framework when describing what it does.**


Please navigate to this Confluence page in your browser and follow the instructions for installing gradlew for your local environment:

```
https://confluence.pncint.net/display/STR/Setting+up+gradlew
```

**Prerequisites:**


What things you need to install the software and how to install them



In order to run this project, you will need `gradle-wrapper.jar`. It should be installed in `quality_engineering/ui/gradle/wrapper/` and `quality_engineering/services/gradle/wrapper/`

You can download the `gradle-wrapper.jar` from here. https://connections.pncint.net/files/form/anonymous/api/library/76c36eda-18fc-4268-ae4e-a1db9d08e5bd/document/baf4604a-ba86-4e0e-8daa-c44d4f8c8cda/media/gradle-wrapper.zip



In git bash `cd` into /quality_engineering/ui and run the following command:


Run this gradle command to execute UI tests:

```
cd /quality_engineering/ui
./gradlew clean copyAndRenameDrivers filepermission test -Denvironment="<Your Environment>"
```


