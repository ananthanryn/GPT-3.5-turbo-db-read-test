# GPT-3.5-Turbo Database Read - Proof of Concept

## Introduction

This is a project that demonstrates how we can make use of gpt-3.5-turbo model from OpenAI, which is the same model that is used in ChatGPT as of 2023 and use it to construct SQL queries and how we can use this generated SQL query to fetch data and use the same model to present the same data in a natural way.

Thanks,  
Anantha

## Technical Stuff

We use Angular 16 frontend and FastAPI backend with Uvicorn ASGI web server.

You should set an environment variable that contains your OpenAI API key, the environement variable should be named `OPENAI_API_KEY` if the app doesn't detect the environment variable, then it will ask you to enter it and it will be there until you terminate the app.

A very brief explanation of working.

The message from frontend is passed to backend (including previous messages if any from the user and assistant)

Backend appends this messagelist to a system query (primary prompt instructions) and passes this to an OpenAI API call, it will give the appropriate response and we will send it to the frontend unless we detect an SQL query in the response.

If the response contains an SQL query, we identify it if we can and will execute this query.

The fetched data from DB is converted to JSON data and this is passed along with the messagelist to another instance of OpenAI API call with a different system query which is made to summarize the data passed.

Then the response of that is sent back to frontend

## Running, Development & Contribution

In order to run, develop and contribute, fork this project and clone it to your local machine.  
We use Visual Studio Code for development and recommend you to use it as well.

You should have

- Python 3.11 or above
- Node v18.16.0 or above

We recommend working with a virtual environment to isolate the packages.

You can install `virtualenv` for that purpose (we use `pipx` to install it)

```
pipx install virtualenv
```

Then within the cloned repository run the following command to create a virtual environment

```
virtualenv venv
```

After which change the interpreter within Visual Studio Code to point to the Python Interpreter contained within the created virtual environment.

Now create a new terminal in Visual Studio Code and you'll see that the virtual environement is activated.

> You can see `(venv)` in the shell prompt of the terminal.

After which type in the following command to install an editable module of the project you are working on

```
pip install -e .
```

After making any changes to the code you can always run it whenever by executing `chadgpt`

Whenever you are modifying the code, most of the time you won't have to rebuild and reinstall the editable module and that is the advantage of this approach.

Now you're all set!
