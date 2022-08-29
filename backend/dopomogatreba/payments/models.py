from django.db import models
from django.contrib.auth.models import User
from adverts.models import Advert


class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    advent = models.ForeignKey(Advert,on_delete=models.CASCADE, blank=True, null=True)
    amount = models.DecimalField(verbose_name='Amount', max_digits=9, decimal_places=2,
                                 blank=True, null=True)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return self.amount
    
    class Meta:
        verbose_name = "Счет"
        verbose_name_plural = "Счета"

