from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from accounts import views
from accounts.views import CustomAuthData, ChangePassword
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/adverts/', include('adverts.urls')),

    path('changepassword/', views.ChangePassword.as_view()),

    path('hello/', views.HelloView.as_view(), name='hello'),
    # path('api-token-auth/', obtain_auth_token.as_view(), name='api_token_auth'),
    path('api-token-auth/', CustomAuthData.as_view(), name='api_token_auth'),

] + static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
