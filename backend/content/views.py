from django.shortcuts import render
from django.views import View

# Create your views here.
class MyView(View):

    def get(self, request):
        return render(request, 'content/index.html', {})




# Create your views here.
class MyViewOne(View):

    def get(self, request):
        return render(request, 'content/index1.html', {})
