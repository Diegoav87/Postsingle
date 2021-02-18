from rest_framework import serializers
from .models import Post, Comment
from accounts.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'created_at', 'user')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
