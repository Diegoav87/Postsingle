from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from rest_framework.decorators import permission_classes
from rest_framework import permissions
# Create your views here.


@api_view(['POST'])
def Register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({"user": UserSerializer(user).data, "token": AuthToken.objects.create(user)[1]}, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)
        return Response({'Bad Request': "Data is not valid"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_user(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data
        return Response({"user": UserSerializer(user).data, "token": AuthToken.objects.create(user)[1]}, status=status.HTTP_200_OK)
    else:
        return Response({'Bad Request': "Data is not valid"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)
