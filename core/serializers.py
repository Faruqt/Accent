from rest_framework import serializers
from .models import Accent, TotalFee, Account

class AccentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accent
        fields = ('id', 'address', 'board', 'fee')

class TotalSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalFee
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'
