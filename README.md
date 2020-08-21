# Sano Genetics Full-stack engineer task

# Installation

* Install Python 3.8 and Node 12.x.x
* Install Postgres. For Mac, we recommend Postgres app: https://postgresapp.com/
* Run a local postgres server and create a new database called `fsd`
* Set `connection_url` key in `local-config.json` to the database URL
* Within the `server/` directory, seed your local database with example studies by running:
  - `pip install virtualenv`
  - `virtualenv -p python3 venv`
  - `source venv/bin/activate`
  - `pip install -r requirements.txt`
  - `python run/seed_db.py`
* Within the `server/` directory, run the server locally with `run/server`.
* In a seperate terminal shell, inside the `client/` directory, download the client dependencies and run the client locally with `run/client`.
* Navigate to http://0.0.0.0:2000 in your browser


# Rest of tasks explanations:
### Task 6
Using Vuex you can persist the data and then you can either refresh the data every few seconds or everytime the user clicks to go to that panel trigger a refresh.
### Task 7
I would create Post and Comment models. Each Comment will link to the Post it is part of and the User who created it. Each Post will link to the Study it is under and the User who created it.
### Task 8
There are libraries in both JS and Python that can help with this. For example [strongpassword-js](https://github.com/jongha/strongpassword-js). We can agree on a threshold and then make sure that a user's password is above it. Alternitavely we can allow users to login with Google/Facebook/etc. which would put less burden on us.

Apologies I did not have enough time to finish or go into detail with regards to the recommendations for the above tasks.
