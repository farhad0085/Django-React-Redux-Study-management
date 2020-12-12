from typing import Mapping
from rest_framework import serializers
from .models import Course, Question, Semester, Book, Picture, Post



class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    pictures = PictureSerializer(many=True)
    questions = QuestionSerializer(many=True)
    books = BookSerializer(many=True)
    class Meta:
        model = Course
        fields = '__all__'


class SemesterSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)
    class Meta:
        model = Semester
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

