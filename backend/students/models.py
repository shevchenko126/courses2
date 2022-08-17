from django.db import models
from django.utils.translation import gettext_lazy as _
from parler.models import TranslatableModel, TranslatedFields


class Student(models.Model):

    name = models.CharField(verbose_name=_("Имя"), max_length=200, blank=True, null=True)
    surname = models.CharField(verbose_name=_("Фамилия"), max_length=200, blank=True, null=True)
    age = models.IntegerField(verbose_name="Возраст", blank=True, null=True)
    group = models.ForeignKey("StudentGroup", verbose_name="Группа", blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name + ' ' + self.surname

    class Meta:
        verbose_name="Студент"
        verbose_name_plural="Студенты"
        # ordering=['name']
        db_table = 'our_students'

class StudentGroup(models.Model):

    title = models.CharField(verbose_name="Имя", max_length=200, blank=True, null=True)


class Subject(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(verbose_name=_("Название"), max_length=200, blank=True, null=True),
        description = models.TextField(verbose_name="Описание", blank=True, null=True)
    )
    group = models.ForeignKey("StudentGroup", verbose_name="Группа", blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name="Предмет"
        verbose_name_plural="Предметы"