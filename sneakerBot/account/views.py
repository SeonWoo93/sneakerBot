from django.shortcuts import render
from rest_framework import generics 

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

#User모델과 직렬화 설정 import 
from .models import Account, UserSerializer

'''
** REST Framework의 generics뷰 종류
 CreateAPIView : 모델인스턴스생성
 ListAPIView : 리스트 쿼리셋
 RetrieveAPIView : 모델인스턴스 검색
 DestroyAPIView : 모델 인스턴스 제거
 UpdateAPIView : 모델 인스턴스 업데이트
 ListCreateAPIView : 쿼리셋을 나열하거나 생성(?) -> 읽기/쓰기가능
 RetrieveUpdateAPIView : 검핵혹은 업데이트(?)
 RetrieveDestroyAPIView
 RetrieveUpdateDestroyAPIView : 단일모델 인스턴스-> 읽기/쓰기/삭제
'''

class ListUser(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = UserSerializer

## 조회, 수정 삭제
class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = UserSerializer

    # def login(self, request, usename, password):
    #     #로그인시 username가져옴
    #     user = Account.objects.get(usename=username)

class SignInUser(CreateView):
    queryset = Account.objects.all()
    model = Account
    fields = ['username','password','nickname', 'ip_address']
    success_url = reverse_lazy('') #inser성공시 메인홈으로 이동

    #폼 유효성체크?
    # def form_valid(self, form):  
    #     # self.object = form.save(commit=False)      
    #     form.instance.user = self.request.user and self.request.user.propicker
    #     return super(GalleryCreateView, self).form_valid(form)


#로그인뷰
# class LoginAccountView(LoginView):
    
