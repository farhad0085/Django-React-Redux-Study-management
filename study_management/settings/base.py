import os
from pathlib import Path
from dotenv import load_dotenv

ENV_PATH = os.path.join(Path(__file__).resolve().parent.parent.parent, '.env')
load_dotenv(ENV_PATH)


def convert_to_bool(string):
    string = str(string)
    return string.lower() in ['true', '1', 't', 'y', 'yes', 'yeah', 'yup', 'yep', 'ha']

BASE_DIR = Path(__file__).resolve().parent.parent.parent

DEBUG = convert_to_bool(os.environ.get("DEBUG"))

SECRET_KEY = os.environ.get("SECRET_KEY")

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'study_management.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'frontend')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'study_management.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

# Custom settings

AUTH_USER_MODEL = 'user.UserProfile'
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # custom
    'user.apps.UserConfig',
    'course.apps.CourseConfig',
    
    # rest framework
    'rest_framework',
    'rest_framework.authtoken',

    # auth
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    "rest_auth",
    "rest_auth.registration",

    # cors
    'corsheaders',

    # filters
    'django_filters',
]

SITE_ID = 1



REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}


CORS_ALLOW_ALL_ORIGINS = True

# media settings
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "frontend", "build", "static")
]
STATIC_ROOT = 'staticfiles'

REST_AUTH_SERIALIZERS = {
    'PASSWORD_RESET_SERIALIZER': 'user.serializers.PasswordResetSerializer',
}
# emails for sending error mails
ADMINS = [
    ("Farhad", os.environ.get("ADMIN_EMAIL")),
]

# Email settings
SERVER_EMAIL = os.environ.get("SERVER_EMAIL") # used for sending error messages to email

EMAIL_HOST = os.environ.get("EMAIL_HOST")
EMAIL_PORT = os.environ.get("EMAIL_PORT")
EMAIL_USE_TLS = convert_to_bool(os.environ.get("EMAIL_USE_TLS"))

EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
