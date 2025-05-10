from django.urls import path
from .views import *

urlpatterns = [
    path('list', ModaListView.as_view()),
    path('by_category', ListModaByCategoryView.as_view()),
    path('detail/<slug>', ModaDetailView.as_view()),
    path('search', SearchModaView.as_view()),

]