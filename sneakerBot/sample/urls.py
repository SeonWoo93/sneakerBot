from django.conf.urls import url, include
from rest_framework import routers
from sample.views import UserMain

router = routers.DefaultRouter()
router.register('user', UserMain)

urlpatterns = [
    url('', include(router.urls))    
]