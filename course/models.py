from django.db import models
from django.contrib.auth import get_user_model
import datetime


class Semester(models.Model):
    display_name = models.CharField(max_length=6, unique=True)
    full_name = models.CharField(max_length=50)
    code = models.IntegerField(verbose_name="Semester Code")
    description = models.TextField(blank=True)

    def __str__(self):
        return self.display_name

class Course(models.Model):
    course_code = models.CharField(max_length=8, unique=True)
    title = models.CharField(max_length=200)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.course_code


class Picture(models.Model):
    description = models.TextField(blank=True)
    picture = models.ImageField(upload_to="media/pictures/", blank=False, null=False)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='pictures')
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='pictures')


class Question(models.Model):
    pictures = models.ManyToManyField(Picture, related_name="questions")
    year = models.IntegerField(default=datetime.datetime.today().year)
    course_teacher = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)


class Book(models.Model):
    book = models.FileField(upload_to="media/books", blank=False, null=False)
    description = models.TextField(blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='books')


class Post(models.Model):
    title = models.CharField(max_length=200, blank=True)
    body = models.TextField(blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='posts')
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, related_name='posts')
    books = models.ManyToManyField(Book, related_name="posts", blank=True)
    posted_by = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)


