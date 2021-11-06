from django.db import models

# Create your models here.
class Accent(models.Model):
    address = models.CharField(max_length=120)
    board = models.CharField(max_length=120)
    fee = models.FloatField(default=False)

    def _str_(self):
        return self.address

class TotalFee(models.Model):
    total = models.FloatField(default=False)

    def _str_():
        return 'total'

class Account(models.Model):
    agent = models.CharField(max_length=120)
    
    def _str_(self):
        return self.agent
