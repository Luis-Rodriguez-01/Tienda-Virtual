from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')
    views = serializers.SerializerMethodField()  # Calcula el conteo de vistas  
    
    class Meta:
        model = Product
        fields = '__all__'
        
    def get_views(self, obj):
        # Usa el método get_view_count del modelo para calcular las vistas
        return obj.get_view_count()
