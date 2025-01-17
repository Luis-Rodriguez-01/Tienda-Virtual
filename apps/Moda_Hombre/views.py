from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import *
from .serializers import ModaSerializer
from apps.Category.models import Category
from django.db.models.query_utils import Q

class ModaListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if ModaHombre.objects.exists():
            moda = ModaHombre.objects.all()
            serializer = ModaSerializer(moda, many=True)
            return Response({'Moda': serializer.data}, status=status.HTTP_200_OK)  
        else:
            return Response({'error': 'Not found Moda'}, status=status.HTTP_404_NOT_FOUND)
        




class ListModaByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        slug = request.query_params.get('slug')

        # Verificar si el parámetro 'slug' está presente
        if not slug:
            return Response({'error': 'Slug is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Buscar la categoría con el slug proporcionado
        try:
            category = Category.objects.get(slug=slug)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        # Inicializar queryset de productos ordenado por precio
        moda = ModaHombre.objects.order_by('-price')

        # Verificar si la categoría tiene padre (es una subcategoría)
        if category.parent:
            moda = moda.filter(category=category)
        else:
            # Si no hay subcategorías
            if not Category.objects.filter(parent=category).exists():
                moda = moda.filter(category=category)
            else:
                # Obtener todas las subcategorías de la categoría raíz
                subcategories = Category.objects.filter(parent=category)
                filtered_categories = [category] + list(subcategories)

                # Filtrar productos pertenecientes a la categoría raíz o subcategorías
                moda = moda.filter(category__in=filtered_categories)

        # Serializar los productos
        serializer = ModaSerializer(moda, many=True)

        # Retornar los datos serializados
        return Response({'Moda': serializer.data}, status=status.HTTP_200_OK)
    


class ModaDetailView(APIView):
    def get(self, request, slug, format=None):
        try:
            # Obtener el producto por slug
            moda = ModaHombre.objects.get(slug=slug)

            # Serializar el producto
            serializer = ModaSerializer(moda)

            # Obtener la IP del cliente
            ip_address = self.get_client_ip(request)

            # Registrar la vista si no existe para la IP y producto
            if not ViewCount.objects.filter(moda=moda, ip_address=ip_address).exists():
                ViewCount.objects.create(moda=moda, ip_address=ip_address)
                moda.views += 1
                moda.save()

            # Retornar el producto serializado
            return Response({'moda': serializer.data}, status=status.HTTP_200_OK)

        except ModaHombre.DoesNotExist:
            # Manejar el caso cuando no se encuentra el producto
            return Response({'error': 'Moda does not exist'}, status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def get_client_ip(request):
        """
        Obtiene la dirección IP del cliente desde los encabezados HTTP.
        """
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[-1].strip()  # Toma la última IP en caso de múltiples proxies
        else:
            ip = request.META.get('REMOTE_ADDR')  # Dirección IP directa
        return ip
    

class SearchModaView(APIView): 
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        if not search_term:
            return Response({'error': 'No search term provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        matches = ModaHombre.objects.filter(
            Q(name__icontains=search_term) |
            Q(category__name__icontains=search_term)  # Ajusta al campo relacionado
        )
        serializer = ModaSerializer(matches, many=True)
        return Response({'filter_moda': serializer.data}, status=status.HTTP_200_OK)