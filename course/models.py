from django.db import models
from django.contrib.auth import get_user_model
import datetime


class Semester(models.Model):
    display_name = models.CharField(max_length=6)
    full_name = models.CharField(max_length=50)
    code = models.IntegerField(verbose_name="Semester Code", unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.display_name

class Course(models.Model):
    course_code = models.CharField(max_length=8)
    title = models.CharField(max_length=200)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, null=True, related_name='courses')

    def __str__(self):
        return self.course_code


class Picture(models.Model):
    description = models.TextField(blank=True)
    picture = models.ImageField(upload_to="pictures", blank=False, null=False)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='pictures')

    def __str__(self):
        return self.picture.url

class Question(models.Model):
    pictures = models.ManyToManyField(Picture, related_name="questions")
    year = models.IntegerField(default=datetime.datetime.today().year)
    course_teacher = models.CharField(max_length=100, default="Course Teacher Not Assigned")
    created_date = models.DateTimeField(auto_now_add=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='questions')
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.course_teacher

class Book(models.Model):
    title = models.CharField(max_length=500, blank=True, null=True, default="title not found")
    file = models.FileField(upload_to="books", blank=False, null=False)
    description = models.TextField(blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.title or "title not found"

class ClassNote(models.Model):
    title = models.CharField(max_length=500, blank=True, null=True, default="title not found")
    file = models.FileField(upload_to="classnotes", blank=False, null=False)
    description = models.TextField(blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(get_user_model(), null=True, on_delete=models.SET_NULL)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, related_name='classnotes')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='classnotes')

    def __str__(self):
        return self.description[:30] or "description not found"

class Post(models.Model):
    title = models.CharField(max_length=200, blank=True)
    body = models.TextField(blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='posts')
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE, related_name='posts')
    books = models.ManyToManyField(Book, related_name="posts", blank=True)
    classnotes = models.ManyToManyField(ClassNote, related_name="posts", blank=True)
    questions = models.ManyToManyField(Question, related_name="posts", blank=True)
    posted_by = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title or "title not found"