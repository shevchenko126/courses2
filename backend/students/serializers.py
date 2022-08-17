from dataclasses import field
from rest_framework import serializers
from students.models import Subject
from parler_rest.serializers import TranslatableModelSerializer, TranslatedField, TranslatedFieldsField

class SubjectSerializer(TranslatableModelSerializer):

    translations = TranslatedFieldsField(shared_model=Subject)

    title = TranslatedField('title')

    class Meta:
        model = Subject
        fields = '__all__'
        depth = 1
