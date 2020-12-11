from allauth.account.views import ConfirmEmailView
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.http import Http404
from django.shortcuts import redirect

class CustomConfirmEmailView(ConfirmEmailView):
    pass
    # def get(self, *args, **kwargs):
    #     try:
    #         self.object = self.get_object()
    #     except Http404:
    #         self.object = None
    #     user = get_user_model().objects.get(email=self.object.email_address.email)
    #     redirect_url = reverse('user', args=(user.id,))
    #     return redirect(redirect_url)