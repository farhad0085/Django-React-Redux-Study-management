from course.views import index
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", index),

    # APIs
    path('api/', include('course.urls')),
    path('api/auth/', include('user.urls')),
]

# media urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)