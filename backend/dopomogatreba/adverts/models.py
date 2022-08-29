from statistics import mode
from django.conf import settings
from django.db import models


class Advert(models.Model):
    title = models.CharField(max_length=200)
    image = models.FileField(blank=True, null=True)
    description = models.TextField(max_length=1000, blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                blank=True, null=True)
    category = models.ForeignKey("AdvertCategory", on_delete=models.SET_NULL,
                            blank=True, null=True)
    is_active = models.BooleanField(verbose_name="Is Active", default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Advert"
        verbose_name_plural = "Adverts"

class AdvertCategory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Advert category"
        verbose_name_plural = "Advert categories"

class AdvertResponse(models.Model):
    title = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    advert = models.ForeignKey(Advert,on_delete=models.CASCADE,
                            blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Advert response"
        verbose_name_plural = "Advert responses"

class AdvertFeature(models.Model):
    text = models.CharField(max_length=100)
    advert = models.ForeignKey(Advert, on_delete=models.CASCADE,
                                blank=True, null=True)
    def __str__(self):
        return self.text

    class Meta:
        verbose_name = "Advert feature"
        verbose_name_plural = "Advert features"
