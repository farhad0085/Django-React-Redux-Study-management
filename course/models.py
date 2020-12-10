from django.db import models
from django.contrib.auth import get_user_model
import datetime


SEMESTERS = [
    ["1-1", "1 - 1"],
    ["1-2", "1 - 2"],
    ["2-1", "2 - 1"],
    ["2-2", "2 - 2"],
    ["3-1", "3 - 1"],
    ["3-2", "3 - 2"],
    ["4-1", "4 - 1"],
    ["4-2", "4 - 2"],
]


class Semester(models.Model):
    name = models.CharField(max_length=6, choices=SEMESTERS)
    description = models.TextField()


class Course(models.Model):
    course_code = models.CharField(max_length=8)
    title = models.CharField(max_length=200)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)


class Picture(models.Model):
    description = models.TextField(blank=True)
    picture = models.ImageField(upload_to="media/pictures/", blank=False, null=False)
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)


class Question(models.Model):
    pictures = models.ManyToManyField(Picture)
    year = models.IntegerField(default=datetime.datetime.today().year)
    course_teacher = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)


class Book(models.Model):
    book = models.FileField(upload_to="media/books", blank=False, null=False)
    description = models.TextField(blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)


class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(blank=True)
    posted_by = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    

