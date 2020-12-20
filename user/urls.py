from user.views import CustomConfirmEmailView, RegistrationView
from django.urls import path, include, re_path
from rest_auth.views import PasswordResetConfirmView


urlpatterns = [

    path('password/reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('', include('rest_auth.urls')),
    path('register/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('register/', RegistrationView.as_view()),
    path('register/', include('rest_auth.registration.urls')),
]