from re import L
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from adverts.models import Advert
from rest_framework.authtoken.models import Token
from adverts.serializers import AdvertSerializer, FullAdvertSerializer


class GetAdverts(viewsets.ModelViewSet):

    serializer_class = AdvertSerializer
    #queryset = Advert.objects.all()
    permissions = (permissions.IsAuthenticatedOrReadOnly(), )

    def get_serializer_class(self, *args, **kwargs):

        if self.detail:
            return FullAdvertSerializer
        return AdvertSerializer


    def get_queryset(self):
        adverts = Advert.objects.all()

        category_ids = self.request.GET.getlist('category_id', [])
        if len(category_ids):
            adverts = adverts.filter(category_id__in=category_ids)

        # if price:
        #     adverts = adverts.
        return adverts

    def create(self, request):

        token = request.headers.get('Authorization', '')
        if not token:
            return Response({
                "success":False
            })

        token_obj = Token.objects.filter(key=token).first()
        if not token_obj:
            return Response({
                "success":False
            })

        advert_data = {
            "title":request.data.get("title", '12'),
            "description":request.data.get("description", ''),
            "category_id":request.data.get("category_id", ''),
            "author":token_obj.user
        }

        advert = Advert.objects.create(**advert_data)

        return Response({
            "success":True,
            "id":advert.id
        })



    def patch(self, request, id=None):

        token = request.headers.get('Authorization', '')
        if not token or not id:
            return Response({
                "success":False
            })

        token_obj = Token.objects.filter(key=token).first()
        if not token_obj:
            return Response({
                "success":False
            })

        advert_data = {
            "title":request.data.get("title", '12'),
            "description":request.data.get("description", ''),
            "category_id":request.data.get("category_id", ''),
            "author":token_obj.user
        }

        advert = Advert.objects.filter(id=id).update(**advert_data)

        return Response({
            "success":True,
            "id":advert.id
        })

    def destroy(self, request, pk=None):

        token = request.headers.get('Authorization', '')
        if not token or not id:
            return Response({
                "success":False
            })

        token_obj = Token.objects.filter(key=token).first()
        if not token_obj:
            return Response({
                "success":False
            })

        advert = Advert.objects.filter(pk=pk).update(is_active=False)

        return Response({
            "success":True,
            "id":advert
        })
