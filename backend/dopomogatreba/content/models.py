from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(
        verbose_name="Назва", blank=True, null=True, max_length=30
        )
    def __str__(self):
        return self.title
    
    def save(self):
        super().save()
    class Meta:
        verbose_name = "Блог"
        verbose_name_plural = "Блоги"

class BlogCategory(models.Model):
    title = models.CharField(
        verbose_name="Назва", blank=True, null=True, max_length=30
        )
    
    blog = models.ForeignKey(
        Blog, verbose_name="Назва блогу", null=True, blank=True, on_delete=models.SET_NULL
        )

    def __str__(self):
        return self.title
    
    def save(self):
        super().save()

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"
