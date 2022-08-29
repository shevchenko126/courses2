from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, permissions


class CustomAuthData(ObtainAuthToken):
    queryset = User.objects.all()

    def post(self,request, *args, **kwargs):
        user_data = {
            "username": request.data['username'].lower,
            "password": request.data['password']
        }
        
        try:
            user = authenticate(**user_data)
            resp = {
                "success":True,
                "token": Token.objects.filter(user=user).first().key,
                "user_id": user.id,
                "user_email": user.email,
            }
        except:
            resp = {
                "success":False,
                "token": "",
                "user_id": 0,
                "user_email": "",
            }
        return Response(resp)
    # def post(self, request, *args, **kwargs):
    #         serializer = self.serializer_class(data=request.data,
    #                                    context={'request': request})
    #         serializer.is_valid(raise_exception=True)
    #         user = serializer.validated_data['user']
    #         token, created = Token.objects.get_or_create(user=user)
    #         return Response({
    #             'token': token.key,
    #             'user_id': user.pk,
    #             'email': user.email
    #     })
    #
    #
    # def get(self,request, *args, **kwargs):
    #     token = request.data.get('Authorization')
    #     user = Token.objects.get(key=token).user
    #     try:
    #
    #         user_id = user.pk
    #         user_email = user.email
    #         print(str(token))
    #     except Token.DoesNotExist:
    #         user_id = 0
    #         user_email = ""
    #         print(str(token))
    #     return Response({
    #         "token": token,
    #         "user_id": user.pk,
    #         "user_email": user.email,
    #     })


class ChangePassword(APIView):

    permissions = (permissions.IsAuthenticatedOrReadOnly(), )

    def get(self, request):
        print(self.request.headers)
        token = self.request.headers.get('token', '')

        new_password = self.request.headers.get("new-password", '')
        new_password_repeat = self.request.headers.get('new-password-repeat', '')

        try:
            user = Token.objects.get(key=token).user
        except Token.DoesNotExist:
            content = {'message': 'Token not found'}
            return Response(content)
        if (new_password != new_password_repeat):
            content = {'message': 'Pasword not the same'}
            return Response(content)
        user.set_password('admin')
        user.save()
        content = {'message': 'Pasword changed'}
        return Response(content)
