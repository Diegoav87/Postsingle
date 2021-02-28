from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer
from rest_framework.decorators import permission_classes
from rest_framework import permissions


# Create your views here.

# POSTS

@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all().order_by('-created_at')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_post(request, pk):
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(post)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_post(request):
    serializer = PostSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def update_post(request, pk):
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(instance=post, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_post(request, pk):
    post = Post.objects.get(id=pk)
    post.delete()

    return Response(pk)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_posts(request):
    posts = Post.objects.filter(user=request.user).order_by('-created_at')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


# COMMENTS

@api_view(['GET'])
def comments_for_post(request, pk):
    post = Post.objects.get(id=pk)
    comments = Comment.objects.filter(post=post).order_by('-created_at')
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_comment(request, pk):
    post = Post.objects.get(id=pk)
    serializer = CommentSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(user=request.user, post=post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def update_comment(request, pk):
    comment = Comment.objects.get(id=pk)
    serializer = CommentSerializer(instance=comment, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_comment(request, pk):
    comment = Comment.objects.get(id=pk)
    comment.delete()

    return Response(pk)
