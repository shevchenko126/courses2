from django.contrib import admin
from .models import Advert, AdvertCategory, AdvertResponse, AdvertFeature


admin.site.register(Advert)
admin.site.register(AdvertCategory)
admin.site.register(AdvertResponse)
admin.site.register(AdvertFeature)
