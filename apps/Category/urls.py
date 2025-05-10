from django.urls import path
from .views import ListCategoryViews

urlpatterns = [
    path('list', ListCategoryViews.as_view(), name='list-categories'),
]