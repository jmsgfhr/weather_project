from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^weathers/$', views.WeatherList.as_view(), name='weather-list'),
]