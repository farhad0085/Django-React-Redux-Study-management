from django.urls import path, include
from .views import (
    CourseViewSet,
    PostViewSet,
    QuestionViewSet,
    PictureViewSet,
    SemesterViewSet,
    BookViewSet,
    ClassNoteViewSet
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("courses", CourseViewSet)
router.register("questions", QuestionViewSet)
router.register("semesters", SemesterViewSet)
router.register("books", BookViewSet)
router.register("pictures", PictureViewSet)
router.register("posts", PostViewSet)
router.register("classnotes", ClassNoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
