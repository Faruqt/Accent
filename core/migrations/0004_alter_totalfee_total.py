# Generated by Django 3.2.8 on 2021-11-05 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_accent_fee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='totalfee',
            name='total',
            field=models.FloatField(default=False),
        ),
    ]
