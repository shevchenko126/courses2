from django.contrib import admin
from pymongo import MongoClient
from content.models import Page
from django.urls import path

connect_string = "mongodb://user:password@localhost/database"
mongo_id = '62e95103977cca6896c8fd67'

@admin.register(Page)
class MyModelAdmin(admin.ModelAdmin):

    def get_url(self):
        urls = super().get_urls()

        my_urls = [
            path('landing-page/', self.my_view, name="landing-page"),
            path('landing/', self.my_view, name="landing"),
        ]
        return urls + my_urls

    def my_view(self, request):


        mongo_client = MongoClient(connect_string)
        dbname = mongo_client['database']
        # collection_name = dbname['test']
        collection_name = dbname['test']
        if not 'test' in dbname.list_collection_names():
            collection_name.insert_one({"_id":"test"})
        collection_dict = collection_name.find_one({"_id":"test"})


        if request.method == 'POST':
            collection_name.update_one({"_id":mongo_id}, {"$set":{"name":'Ivan2'}})

        page_dict = collection_name.find_one({"_id":mongo_id})
        context = {
            **self.admin_site.each_context(request),
            **page_dict
        }

        return TemplateResponse(request, 'admin/landing.html', context)
