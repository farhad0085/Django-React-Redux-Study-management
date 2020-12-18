from django.contrib import admin
from .models import *


class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'course_code', 'semester']


class SemesterAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'display_name', 'code', 'description']


class QuestionAdmin(admin.ModelAdmin):
    list_display = ['course_teacher', 'year', 'semester', 'course', 'uploaded_by', 'created_date']


class PictureAdmin(admin.ModelAdmin):
    list_display = ['get_short_description', 'picture', 'uploaded_by', 'semester', 'course', 'created_date']

    def get_short_description(self, instance):
        return instance.description[:30]


class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'file', 'get_short_description', 'uploaded_by', 'semester', 'course', 'created_date']

    def get_short_description(self, instance):
        return instance.description[:30]


class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'get_short_body', 'course', 'semester', 'posted_by', 'created_date']

    def get_short_body(self, instance):
        return instance.body[:30]


class ClassNoteAdmin(admin.ModelAdmin):
    list_display = ['get_short_description', 'file', 'course', 'semester', 'uploaded_by', 'created_date']

    def get_short_description(self, instance):
        return instance.description[:30]

admin.site.register(Course, CourseAdmin)
admin.site.register(Semester, SemesterAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Picture, PictureAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(ClassNote, ClassNoteAdmin)