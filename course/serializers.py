from collections import OrderedDict
from rest_framework import serializers
from .models import Course, Question, Semester, Book, Picture, Post, ClassNote


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



class ClassNoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClassNote
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

    def _build_title(self, data):
        books = data.get('books', None)
        classnotes = data.get('classnotes', None)
        questions = data.get('questions', None)
        request = self.context.get('request', None)

        title = f"{request.user.name} uploaded "

        if books:
            title += f"{len(books)} books"
        elif classnotes:
            title += f"{len(classnotes)} classnotes"
        elif questions:
            title += "1 question"
        else:
            title += "something"

        return title

    def validate(self, data: OrderedDict):
        title = self._build_title(data)
        data.update({"title": title})
        return super().validate(data)

    def save(self, **kwargs):
        return super().save(**kwargs)


class PostListSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    books = BookSerializer(many=True, read_only=True)
    classnotes = ClassNoteSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    pictures = PictureSerializer(many=True, read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)
    books = BookSerializer(many=True, read_only=True)
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class SemesterSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = Semester
        fields = '__all__'
