# django의 AbstractBaseUser상속을 통한 User 커스터마이징 구현
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)

from django.db import models

#verbose _사용 -> 의미는 모름
from django.utils.translation import ugettext_lazy as _


# 참고 사이트 : https://wikidocs.net/10294
# Account/model.py

 class UserManager(BaseUserManager):

    #User생성함수(회원가입 함수)
    def create_user(self, username, nickname, password):
        """ "3개쓰면 여러줄 주석
         username:사용자아이디, nickname:사용자이름,
        """
        
#사용자 로그인 모델, Django의 User기능을 상속받아 사용한다. 
#PermissionsMixin은 권한 인증 믹스인기능.
class User(AbstractBaseUser, PermissionsMixin):
    
    #사용자아이디(username), 패스워드(password) AbstractBaseUser에 내장되어 있음 
    # -> 따로 정의해줄 필요 없는듯 

    #사용자이름
    nickname = models.CharField(
        #verbose_name=("user name"),
        max_length = 100,
        required=True
    )

    #이메일 [2021-02-28] 내부적인 프로그램이므로 메일 컬럼 삭제
    # email = models.EmailField(
    #     #verbose_name=_("Email address"),
    #     max_length = 255
    # )

    #ip주소
    ip_address = models.CharField(
        max_length = 100
    )
    #활성화 여부 (기본값 false, 관리자가 활성화 해주면 사용가능)
    is_active = models.BooleanField( 
        default = False
    )
    #관리자여부 (기본값 false)
    is_admin = models.BooleanField( 
        default = False
    )

    #모델Object는 UserManager
    # objects = UserManager()

    #Document는 username속성에 email을 넣어 email로 로그인시도
    #우리는 username그대로 로그인할것이므로 설정해주지 않는다. 
    #USERNAME_FIELD = 'email'

    #필수항목 지정(ip주소)
    REQUIRED_FIELDS = ['ip_address',]

    #내부클래스 Meta선언 -> 용도가 있었음 찾아보면 좋을듯
    #verbose_name이 명칭 혹은 복수명칭 지칭하는 이름이었던거로 기억함 -> 찾아보기
    class Meta:
        verbose_name = _("accountUser")
        verbose_name_plural = _("accountUsers")

    #로그 출력해주는 포멧으로 기억함
    def __str__(self):
        return self.username


