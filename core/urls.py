from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/category/', include('apps.Category.urls')),
    path('api/products/', include('apps.Productos.urls')),
    path('admin/', admin.site.urls),
]

# Servir React desde dist/
urlpatterns += [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
    path('', TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
