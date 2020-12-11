from django.contrib import admin
from .models import *


class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'course_code', 'semester']


class SemesterAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'display_name', 'code', 'description']


admin.site.register(Course, CourseAdmin)
admin.site.register(Semester, SemesterAdmin)
admin.site.register(Question)
admin.site.register(Picture)
admin.site.register(Book)
admin.site.register(Post)