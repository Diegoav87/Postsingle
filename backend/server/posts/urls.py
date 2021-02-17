from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list),
    path('post-get/<str:pk>/', views.get_post),
    path('post-create/', views.create_post),
    path('post-update/<str:pk>/', views.update_post),
    path('post-delete/<str:pk>/', views.delete_post),
    path('post-user/', views.user_posts),
]
