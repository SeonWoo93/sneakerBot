from rest_framework import routers
from django.urls import path

from . import views
from .views import ListUser, DetailUser
from django.contrib.auth import login as auth_login

#from django.contrib.auth import views as auth_views 

router = routers.DefaultRouter()
router.register('accountList', ListUser)
router.register('accountDetail', DetailUser)

urlpatterns = [
    path('', views.ListUser.as_view()),
    path('<int:pk>/', views.DetailUser.as_view()),
    # path('login/', auth_views.LoginView.as_view())
    path('login/', auth_login)
]