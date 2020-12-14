from rest_framework.viewsets import ModelViewSet
from .models import Course, Question, Semester, Book, Picture, Post
from .serializers import (
    CourseSerializer,
    QuestionSerializer,
    SemesterSerializer,
    BookSerializer,
    PictureSerializer,
    PostSerializer
)
from django_filters import rest_framework as filters

class SemesterViewSet(ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class PictureViewSet(ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('course', 'semester')
