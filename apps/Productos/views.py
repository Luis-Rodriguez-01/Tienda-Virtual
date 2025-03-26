from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from .models import Category
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404

class ProductListView(APIView):
    def get(self, request):
        productos = Product.objects.all()
        serializer = ProductSerializer(productos, many=True)
        return Response(serializer.data)
    

class ListProductsByCategoryViews(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if not Product.objects.exists():
            return Response({'error': 'No products found'}, status=status.HTTP_404_NOT_FOUND)

        name = request.query_params.get('name')
        category = get_object_or_404(Category, name=name)

        products = Product.objects.order_by('price').all()

        if not Category.objects.filter(parent=category).exists():
            products = products.filter(category=category)
        else:            
            sub_categories = Category.objects.filter(parent=category)
            filtered_categories = [category] + list(sub_categories)
            products = products.filter(category__in=filtered_categories)

        if not products.exists():
            return Response({'error': 'No products found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProductSerializer(products, many=True)
        return Response({'products': serializer.data}, status=status.HTTP_200_OK)


class GetProductByIdView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, id, format=None):
        # Buscar el producto por ID, si no existe retorna un 404
        product = get_object_or_404(Product, id=id)

        # Serializar y devolver el producto
        serializer = ProductSerializer(product)
        return Response({'product': serializer.data}, status=status.HTTP_200_OK)
