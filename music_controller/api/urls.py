from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom

urlpatterns = [
    path("room", RoomView.as_view()),
    path("create_room", CreateRoomView.as_view()),
    path("room/<str:code>", GetRoom.as_view())
]