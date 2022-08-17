from re import L
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from students.models import Subject
from rest_framework.authtoken.models import Token
from students.serializers import SubjectSerializer


class GetSubjects(viewsets.ModelViewSet):

    serializer_class = SubjectSerializer

    def get_queryset(self):

        send_mail('Subject', 'Subjects', 'no-reply@online-front.pp.ua', ['dima.shevchenkooo@gmail.com'], fail_silently=True)

        subjects = Subject.objects.all()

        group_id = self.request.GET.get('group_id', '')
        if group_id:
            subjects = subjects.filter(group_id=group_id)
        print(subjects)

        title = self.request.GET.get('title', '')
        if title:
            subjects = subjects.filter(translations__title=title)
        print(subjects)

        return subjects

    # def list(self, request):
    #     print('11111111')
    #     queryset = self.get_queryset()
    #     serializer = self.serializer_class(queryset, many=True)
    #     return Response({
    #         "success":True,
    #         "data":serializer.data
    #     })