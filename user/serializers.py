from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class RegistrationSerializer(RegisterSerializer):

    name = serializers.CharField()

    def custom_signup(self, request, user):
        user.name = self.validated_data.get('name', '')
        user.save(update_fields=['name'])



class PasswordResetSerializer(serializers.Serializer):
    """
    Custom Serializer for requesting a password reset e-mail.
    """
    email = serializers.EmailField()
    password_reset_form_class = PasswordResetForm
    

    def get_email_options(self):
        """Override this method to change default e-mail options"""

        extra_email_context = {
            "DEBUG_FLAG": settings.DEBUG
        }
        return {
            # 'email_template_name': 'reset-password-email.txt',
            'html_email_template_name': 'reset-password-email.html',
            'extra_email_context': extra_email_context
        }

    def validate_email(self, value):
        # Create PasswordResetForm with the serializer
        self.reset_form = self.password_reset_form_class(data=self.initial_data)
        if not self.reset_form.is_valid():
            raise serializers.ValidationError(self.reset_form.errors)
        
        # if not UserModel.objects.filter(email=value).exists():
        #     raise serializers.ValidationError(_('No account found for that email address'))

        return value

    def save(self):
        request = self.context.get('request')
        reset_url = "http://google.com"
        # Set some values to trigger the send_email method.
        opts = {
            'use_https': request.is_secure(),
            'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),
            'request': request,
        }

        opts.update(self.get_email_options())
        self.reset_form.save(**opts)