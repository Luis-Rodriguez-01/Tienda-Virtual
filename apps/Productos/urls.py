from django.urls import path
from .views import *

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('by_category/', ListProductsByCategoryViews.as_view(), name='list-products-by-category'),
    path('<int:id>', GetProductByIdView.as_view(), name='get-product-by-id')
]