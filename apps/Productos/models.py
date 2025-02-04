from django.db import models

# Create your models here.
class Product(models.Model):
    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(default="Descripción por defecto")
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  
    stock = models.IntegerField()
    image = models.ImageField(upload_to='products/', blank=True)

    def __str__(self):
        return self.name