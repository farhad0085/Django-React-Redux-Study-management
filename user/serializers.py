from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers


class RegistrationSerializer(RegisterSerializer):

    name = serializers.CharField()

    def custom_signup(self, request, user):
        user.name = self.validated_data.get('name', '')
        user.save(update_fields=['name'])