from user.views import CustomConfirmEmailView
from django.urls import path, include

urlpatterns = [
    path('', include('rest_auth.urls')),
    path('register/account-confirm-email/<key>/', CustomConfirmEmailView.as_view(), name='account_confirm_email'),
    path('register/', include('rest_auth.registration.urls')),
]