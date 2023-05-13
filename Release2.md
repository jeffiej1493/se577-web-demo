# Week 5 Deliverable

## Instructions to Run and Test the Application

### Starting the Microservice

1. Open a terminal or command prompt.

2. Navigate to the microservice's root directory:

    ```
    cd C:\Users\jeffi\se577-web-demo\microservice
    ```

3. Start the microservice by running:

    ```
    node index.js
    ```

    This will start the microservice and it will start listening for requests at `http://localhost:3001`.

### Starting the Web Application

1. Open a new terminal or command prompt window (do not close the one running the microservice).

2. Navigate to the web application's root directory:

    ```
    cd C:\Users\jeffi\se577-web-demo
    ```

3. Start the web application by running:

    ```
    quasar dev
    ```

    This will start the web application and it should automatically open in your default web browser at `http://localhost:8080`.

### Testing the Application

Navigate to the page that lists repositories (http://localhost:3001/repositories). You should see a list of repositories returned by the microservice.

