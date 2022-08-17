from django.contrib import admin
from students.models import Student, StudentGroup, Subject
from parler.admin import TranslatableAdmin

admin.site.register(Student)
admin.site.register(StudentGroup)
admin.site.register(Subject, TranslatableAdmin)
