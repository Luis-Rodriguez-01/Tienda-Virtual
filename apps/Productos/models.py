from django.db import models
from apps.Category.models import Category
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Product(models.Model):
    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    name = models.CharField(max_length=50, unique=True)
    price = models.FloatField(default=0.0, blank=True)
    imagen_url = models.URLField(max_length=700, default="https://media.istockphoto.com/id/2189194504/es/foto/female-hand-with-manicure-holding-gold-mascara-tube.jpg?s=612x612&w=0&k=20&c=ooDe4HsRHaLyivbtjbKcXxcC14DMVo1neUNC302WOdg=")  # Enlace en lugar de ImageField
    original_price = models.FloatField(default=0.0, blank=True)  # Renombrado a estilo snake_case
    description = models.CharField(max_length=250, blank=False, null=False, default='Descripcion por defecto')
    rating = models.DecimalField(default=5.0,
        max_digits=2, decimal_places=1,  # Permite valores como 4.5
        validators=[MinValueValidator('0'), MaxValueValidator('5')]
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def get_view_count(self):
        views = ViewCount.objects.filter(product=self).count()
        return views

class ViewCount(models.Model):
    product = models.ForeignKey(Product, related_name='products_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address} owned by {self.product}"