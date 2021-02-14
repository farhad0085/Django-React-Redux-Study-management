## Available Scripts

In the project directory, run
```
virtualenv venv
source venv/Scripts/activate
python manage.py migrate
```

## Create new user admin user account
```
python manage.py createsuperuser
```
## Populate database with courses and semesters
```
python manage.py populate_semester_course
```

## Run The Project
```
python manage.py runserver
```

In the  `frontend` directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.