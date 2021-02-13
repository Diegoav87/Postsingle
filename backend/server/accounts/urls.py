from django.urls import path, include
from . import views
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', views.Register),
    path('api/auth/login', views.login_user),
    path('api/auth/user', views.get_user),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
