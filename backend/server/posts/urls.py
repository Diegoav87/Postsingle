from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list),
    path('post-get/<str:pk>/', views.get_post),
    path('post-create/', views.create_post),
    path('post-update/<str:pk>/', views.update_post),
    path('post-delete/<str:pk>/', views.delete_post),
    path('post-user/', views.user_posts),
    path('post-comments/<str:pk>/', views.comments_for_post),
    path('comment-create/<str:pk>/', views.create_comment),
    path('comment-update/<str:pk>/', views.update_comment),
    path('comment-delete/<str:pk>/', views.delete_comment)
]
