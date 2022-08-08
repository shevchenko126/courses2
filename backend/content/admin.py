from django.contrib import admin
from pymongo import MongoClient
from content.models import Page
from django.template.response import TemplateResponse
from django.urls import path

connect_string = "mongodb://user:password@localhost/database"
mongo_id = '62e95103977cca6896c8fd67'

@admin.register(Page)
class MyModelAdmin(admin.ModelAdmin):

    def get_urls(self):
        urls = super().get_urls()

        my_urls = [
            path('landing-page/', self.my_view, name="landing-page"),
            path('landing/', self.my_view, name="landing"),
        ]
        return my_urls + urls

    def my_view(self, request):


        mongo_client = MongoClient(connect_string)
        dbname = mongo_client['database']

        collection_name = dbname['test']
        if not 'test' in dbname.list_collection_names():
            collection_name.insert_one({"_id":mongo_id})
        collection_dict = collection_name.find_one({"_id":mongo_id})


        if request.method == 'POST':
            name = request.POST.get('name', '')
            collection_name.update_one({"_id":mongo_id}, {"$set":{"name":name}})

        page_dict = collection_name.find_one({"_id":mongo_id})
        context = {
            **self.admin_site.each_context(request),
        }

        if page_dict:
            context.update(page_dict)

        mongo_client.close()

        return TemplateResponse(request, 'admin/landing.html', context)
