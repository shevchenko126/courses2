from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save


# Create your models here.

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                                blank=False, null=False)
    phone = models.CharField(max_length=20)
    
    def __str__(self):
        return self.phone

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles" 

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                                blank=False, null=False)
    text = models.CharField(max_length=200)
    lat = models.FloatField(blank=True, null=True,default=None)
    lng = models.FloatField(blank=True, null=True,default=None)

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses" 

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)