import requests
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AccentSerializer, TotalSerializer, AccountSerializer
from .models import Accent, TotalFee , Account
import json

from .services import PropertyInfo

# Create your views here.

@ensure_csrf_cookie
def InfoGet(request):
    print('hello')
    #empty database before making api call
    Accent.objects.all().delete()
    TotalFee.objects.all().delete()
    if request.method == "POST": 
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        content = body['customer']

        soldLevy= 7.5/100
        levyAgreement=4/100
        
        api= 'http://boarderectors-api.accentstaging.co.uk/agents/' + content + '/properties'
        print(api)
        try:
            response = requests.get(api, timeout=10) #get api response data from coindesk based on date range supplied by user with a timeout of 10seconds
            response.raise_for_status()        #raise error if HTTP request returned an unsuccessful status code.
            agents = response.json() #convert response to json format
            Address= PropertyInfo(agents, soldLevy, levyAgreement)


        except requests.exceptions.ConnectionError as errc:  #raise error if connection fails
            raise ConnectionError(errc)
        except requests.exceptions.Timeout as errt:     #raise error if the request gets timed out after 10 seconds without receiving a single byte
            raise TimeoutError(errt)
        except requests.exceptions.HTTPError as err:     #raise a general error if the above named errors are not triggered 
            raise SystemExit(err)


    context = {
        }

    return render(request, "index.html", context)

class PropertyView(viewsets.ModelViewSet):
    serializer_class = AccentSerializer
    queryset = Accent.objects.all()

class TotalView(viewsets.ModelViewSet):
    serializer_class = TotalSerializer
    queryset = TotalFee.objects.all()

class AccountView(viewsets.ModelViewSet):
    print('there')
    serializer_class = AccountSerializer
    print('here')
    queryset = Account.objects.all()
