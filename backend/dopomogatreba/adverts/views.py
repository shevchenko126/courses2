from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from adverts.models import Advert

# Create your views here.
from django.http import HttpResponse, JsonResponse
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.views import View
from adverts.models import Advert

def my_view(request):
    if request.method == 'get':
        return HttpResponse('result')

class ViewAllAdverts(View):
    def get(self, request):

        title = request.GET.get('title', False)
        adverts = Advert.objects.all()
        if title:
            adverts = adverts.filter(title=title)

        adverts_data = []
        for advert in adverts:
            adverts_data.append({
                "title":advert.title
            })
        return render(request, 'adverts/adverts.html', {"adverts":adverts_data, "show":False })
        # return JsonResponse({"data":adverts_data})

    def post(self, request):
        name = request.POST.get('title', '')

        print(name)
        print(request.__dict__)
        return HttpResponse(name)

class ViewUserAdverts(View):
    def get(self,request, *args, **kwargs):
        token = self.request.headers.get('token', '')
        try:
            user = Token.objects.get(key=token).user   
            user_id = user.pk
        except Token.DoesNotExist:
            user_id = 0
        
        adverts_data = []

        if user_id>0:
            adverts = Advert.objects.all()
            adverts = adverts.filter(author_id=user_id)
            adverts_data = []
            for advert in adverts:
                adverts_data.append({
                    "title":advert.title,
                    'image':advert.image,
                    'description':advert.description,
                    'author':advert.author, 
                })
        return render(request, 'adverts/adverts.html', {"adverts":adverts_data, "show":True })
        # return JsonResponse({"data":adverts_data})
