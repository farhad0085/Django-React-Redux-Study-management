from user.views import CustomConfirmEmailView, RegistrationView
from django.urls import path, include

urlpatterns = [
    path('', include('rest_auth.urls')),
    path('register/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('register/', RegistrationView.as_view()),
    path('register/', include('rest_auth.registration.urls')),
]