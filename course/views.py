from rest_framework.viewsets import ModelViewSet
from .models import Course, Question, Semester, Book, Picture, Post, ClassNote
from .serializers import (
    CourseSerializer,
    QuestionSerializer,
    SemesterSerializer,
    BookSerializer,
    PictureSerializer,
    PostSerializer,
    PostListSerializer,
    ClassNoteSerializer
)
from django_filters import rest_framework as filters
from rest_framework import filters as drf_filters
from django.shortcuts import render

def index(request):
    return render(request, 'build/index.html')


class SemesterViewSet(ModelViewSet):
    queryset = Semester.objects.all()
    serializer_class = SemesterSerializer
    pagination_class = None


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    pagination_class = None


class PictureViewSet(ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    filter_backends = (filters.DjangoFilterBackend,
                       drf_filters.SearchFilter, drf_filters.OrderingFilter)
    filterset_fields = ('course', 'semester')
    ordering_fields = '__all__'
    search_fields = ['title', 'body']

    # default ordering
    ordering = ['-id']

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)

    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        return PostSerializer


class ClassNoteViewSet(ModelViewSet):
    queryset = ClassNote.objects.all()
    serializer_class = ClassNoteSerializer

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)
