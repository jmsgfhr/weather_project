from rest_framework import generics
from .models import Weather
from .serializers import WeatherSerializer

# Create your views here.

class WeatherList(generics.ListCreateAPIView):

    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer