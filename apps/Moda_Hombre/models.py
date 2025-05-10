from django.db import models
from apps.Category.models import Category

# Create your models here.
class ModaHombre(models.Model):
    class Meta:
        verbose_name = 'Moda Hombre'
        verbose_name_plural = 'Moda Hombres'
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    views = models.IntegerField(default=0, blank=True)
    price = models.FloatField(default=0, blank=True)
    original_price = models.FloatField(default=0, blank=True)  # Renombrado a estilo snake_case
    image = models.ImageField(
    upload_to='moda_hombre/images/',  # Carpeta donde se guardarán las imágenes
    blank=False,  # No Permitir que esté vacío
    null=True,   # Permitir que sea nulo en la base de datos
    max_length=255  # Longitud máxima del nombre del archivo
    )
    
    review_count = models.FloatField(default=0, blank=True)  # Renombrado a estilo snake_case
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    freeShipping = models.BooleanField() # Almacena datos JSON como el nombre y la calificación del vendedor

    def __str__(self):
        return self.name

    def get_view_count(self):
        views = ViewCount.objects.filter(moda=self).count()
        return views

class ViewCount(models.Model):
    moda = models.ForeignKey(ModaHombre, related_name='modaHombre_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"