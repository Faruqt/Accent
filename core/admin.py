from django.contrib import admin
from .models import Accent, TotalFee, Account
# Register your models here.

class AccentAdmin(admin.ModelAdmin):
    list_display = ('address', 'board', 'fee')

# Register your models here.

admin.site.register(Accent, AccentAdmin)
admin.site.register(TotalFee)
admin.site.register(Account)
