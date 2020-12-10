from django.contrib import admin
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['email', 'name', 'is_active', 'is_staff', 'is_superuser']


admin.site.register(UserProfile, UserProfileAdmin)
