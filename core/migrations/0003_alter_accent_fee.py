# Generated by Django 3.2.8 on 2021-11-05 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_totalfee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accent',
            name='fee',
            field=models.FloatField(default=False),
        ),
    ]
