from django.db import models

# Create your models here.


class Weather(models.Model):

    class Meta:

        db_table = 'weather'

    description = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    dt = models.IntegerField(null=True)
    pressure = models.IntegerField(null=True)
    humidity = models.IntegerField(null=True)
    wind_speed = models.FloatField(null=True)
    wind_deg = models.FloatField(null=True)
    pop = models.FloatField(null=True)
    rain = models.FloatField(null=True)
    snow = models.FloatField(null=True)

    dayTemp = models.FloatField(null=True)
    nightTemp = models.FloatField(null=True)
    minDayTemp = models.FloatField(null=True)
    maxDayTemp = models.FloatField(null=True)

    dayFeel = models.FloatField(null=True)
    nightFeel = models.FloatField(null=True)

    def __str__(self):
        return self.description
