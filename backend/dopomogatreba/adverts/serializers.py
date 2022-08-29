from email.headerregistry import Group
from rest_framework import serializers
from adverts.models import Advert

class AdvertSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advert
        fields = ['title', 'image', 'category']
        depth = 1

class FullAdvertSerializer(AdvertSerializer):

    class Meta:
        model = Advert
        fields = AdvertSerializer.Meta.fields + ['description']
        depth = 1
