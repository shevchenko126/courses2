# pylint: disable=no-name-in-module
# pylint: disable=no-self-argument
# pylint: disable=missing-class-docstring
# pylint: disable=trailing-whitespace
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from adverts.views import ViewAllAdverts, ViewUserAdverts
from adverts.api import GetAdverts


router = routers.DefaultRouter()
router.register('adverts', GetAdverts, 'adverts')

urlpatterns = router.urls

# urlpatterns = router.urls + [
#      path('viewAdverts/', ViewAllAdverts.as_view()), # /viewAdverts/ return all adverts in DB
#      path('viewUserAdverts/', ViewUserAdverts.as_view()), # /viewUserAdverts/ return all adverts in DB by User token
# ]
