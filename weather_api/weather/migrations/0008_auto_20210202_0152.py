# Generated by Django 3.1.5 on 2021-02-02 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weather', '0007_auto_20210202_0151'),
    ]

    operations = [
        migrations.AddField(
            model_name='weather',
            name='city',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='weather',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
