from rest_framework import serializers
from apps.Category.models import Category
from .models import ModaHombre, ViewCount

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ModaSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()  # Representa el campo category con su __str__ (nombre)
    views = serializers.SerializerMethodField()  # Calcula el conteo de vistas

    class Meta:
        model = ModaHombre
        fields = [
            'id',
            'name',
            'slug',
            'price',
            'views',
            'original_price',
            'image',
            'review_count',
            'category',
            'freeShipping', 
        ]

    def get_views(self, obj):
        # Usa el método get_view_count del modelo para calcular las vistas
        return obj.get_view_count()