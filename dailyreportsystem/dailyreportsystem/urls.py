"""URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf.urls import include as incR
from django.views.generic import RedirectView
from django.conf import settings
from rest_framework import routers
from django.conf.urls.static import static
from drs import views

router = routers.DefaultRouter()
router.register(r'myforms', views.MyForms)
router.register(r'allrequests', views.FormRequest)

urlpatterns = [
    path('admin/', admin.site.urls),
    url('^api/', incR(router.urls)),
    path('drs/', include('drs.urls')),
    path('', RedirectView.as_view(url='drs/')),
    path('login/', views.loginUser, name='login-user'),
    path('logout/', views.logoutUser, name='logout-user'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
