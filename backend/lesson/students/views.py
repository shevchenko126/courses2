from django.shortcuts import render


class SubjectsView:
    def get(self, request):
        return render(request, 'subjects.html')

    def post(self, request):
        return render(request, 'subjects.html')