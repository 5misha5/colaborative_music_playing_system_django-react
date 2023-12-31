from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom

urlpatterns = [
    path("room", RoomView.as_view()),
    path("create_room", CreateRoomView.as_view()),
    path("room/<str:code>", GetRoom.as_view()),
    path("join_room", JoinRoom.as_view()),
    path("user_in_room", UserInRoom.as_view())
]