from django.urls import path
from .views import InfoGet

urlpatterns = [
    path("", InfoGet, name='index.html'),
]


