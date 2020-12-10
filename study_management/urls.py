from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # APIs
    path('api/', include('course.urls')),
    path('api/auth/', include('user.urls')),
]
