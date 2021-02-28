from rest_framework import serializers
from .models import Post, Comment
from accounts.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'body', 'created_at', 'user')


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username", read_only=True)
    post = serializers.SlugRelatedField(slug_field="title", read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'created_at', 'user', 'post')
