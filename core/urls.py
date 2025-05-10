from django.contrib import admin
from django.urls import path, include, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/modahombre/', include ('apps.Moda_Hombre.urls')),
    path('api/category/', include('apps.Category.urls')),
    path('api/products/', include('apps.Productos.urls')),
    path('admin/', admin.site.urls),

    path('', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

