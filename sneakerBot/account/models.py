# django의 AbstractBaseUser상속을 통한 User 커스터마이징 구현
from django.contrib.auth.models import (
    BaseUserManager, UserManager, AbstractBaseUser, AbstractUser, PermissionsMixin
)
#username유효성 체크 
from django.contrib.auth.validators import UnicodeUsernameValidator

from django.db import models
from rest_framework import serializers #데이터 직렬화

#verbose _사용 -> 의미는 모름
from django.utils.translation import ugettext_lazy as _


# 참고 사이트 : https://wikidocs.net/10294
# Account/model.py

# class UserManager(BaseUserManager):
#BaseUserManager는 base_user파일, UserManager는 models.py 
# -> 어느정도 구현되어 있는 UserManager를 상속받아서 구현
# -> Account모델이 상속받았는데 is_superuser가 없다고 해서 다시 BaseUserManager로 변경
# -> 마이그레이트 다시 해보겠음
class AccountManager(BaseUserManager):

    #User생성함수(회원가입 함수)
    ## TODO 관리자 SET확인하기 -> is_staff필드 혹은 is_superuser
    def create_user(self, username, nickname, password, **extra_fields):
        """ "3개쓰면 여러줄 주석
         username:사용자아이디, nickname:사용자이름,
        """

        if not username:
            raise ValueError('ID는 필수입력입니다.')

        #계정 활성화 여부 Default false -> 관리자가 활성화했을때부터 사용가능
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)

        return super()._create_user(username, 'user@sneaker.com', password, **extra_fields)

        #[2021-03-01] UserManager상속으로 super()호출
        #user모델 set
        # user = self.model(
        #     username=username,
        #     # nickname=nickname,
        #     #이메일 필드 따로 받지 않을 예정이므로 하드코딩
        #     email='email@sneaker.com', 
        # )
        #password SET
        # user.set_password(password)
        # user.save(using=self._db)
        # return user

    def create_superuser(self, username, password, **extra_fields):

        if not username:
            raise ValueError('ID는 필수입력입니다.')

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)

        return super()._create_user(username, 'admin@sneaker.com', password, **extra_fields)

        
#사용자 로그인 모델, Django의 User기능을 상속받아 사용한다. 
#PermissionsMixin은 권한 인증 믹스인기능.
# class User(AbstractBaseUser, PermissionsMixin):
#AbstractBaseUser는 base_user파일, AbstractUser는 models.py 
# -> 어느정도 구현되어 있는 AbstractUser를 상속받아서 구현
class Account(AbstractUser): #PermissionsMixin이 AbstractUser에 포함되어 있음
# class Account(AbstractBaseUser, PermissionsMixin):
    
    #사용자아이디(username), 패스워드(password) AbstractBaseUser에 내장되어 있음 
    # -> 따로 정의해줄 필요 없는듯 
    # -> 상속받으니까 안먹은 -> 그래서 그냥 한땀한땀 해줌.
    # AbstractUser가  permissionMixin을 상속받은 형태라 AbstractBaseUser를 상속해주기 때문에
    # AbstractUser에서 정의된 필드는 셀프로 구현해야함.

    #userID 유효성체크 SET
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        _('username'),
        max_length=150,
        unique=True,
        help_text=_('최대 150자 입력가능. 숫자와 영문, @/./+/-/_ 입력가능.'),
        validators=[username_validator], #유효성체크
        error_messages={
            'unique': _("이미 존재하는 아이디 입니다."),
        },
    )


    #이메일 [2021-02-28] 내부적인 프로그램이므로 메일 컬럼 삭제
    # email = models.EmailField(
    #     #verbose_name=_("Email address"),
    #     max_length = 255
    # )

    #ip주소
    ip_address = models.CharField(
        max_length = 100,
        help_text=_('로그인사용자의 ip주소. 로그인시 접속IP를 체크한다.')
    )
    #활성화 여부 (기본값 false, 관리자가 활성화 해주면 사용가능)
    is_active = models.BooleanField( 
        _('활성화 여부'),
        default = False,
        help_text=_('로그인사용자 활성화(사용가능)여부')
    )
    #관리자여부 (기본값 false) is_staff컬럼 있음
    is_staff = models.BooleanField( 
        _('관리자 여부'),
        default = False,
        help_text=_('관리자 계정여부. 관리자계정은 일반사용자의 설정을 변경할 수 있다.')
    )

    #모델Object는 AccountManager
    objects = AccountManager()

    #Document는 username속성에 email을 넣어 email로 로그인시도
    #우리는 username그대로 로그인할것이므로 설정해주지 않는다. 
    USERNAME_FIELD = 'username'

    #필수항목 지정(ip주소)
    REQUIRED_FIELDS = ['ip_address']

    #내부클래스 Meta선언 -> 용도가 있었음 찾아보면 좋을듯
    #verbose_name이 명칭 혹은 복수명칭 지칭하는 이름이었던거로 기억함 -> 찾아보기
    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")
        swappable = 'AUTH_USER_MODEL'
        #abstract = True ##AbstractUser에 있어서 따라씀 뭔지 모름

    #로그 출력해주는 포멧으로 기억함
    def __str__(self):
        return self.username

    #사용자의 full_name조회. AbstractUser에 존재하는 get_full_name호출
    def get_nickname(self):
        return self.nickname

    #사용자의 ip주소 조회.
    def get_ip_address(self):
        return self.ip_address

#Setting.py에 AUTH_USER_MODEL = 'account.User'를 설정해줄때 Meta sqppable해줘야하는듯?
# class User(Account):
#     """
#     Users within the Django authentication system are represented by this
#     model.

#     Username and password are required. Other fields are optional.
#     """
#     class Meta(Account.Meta):
#         swappable = 'AUTH_USER_MODEL'

# User모델 직렬화 설정 class
# 참고사이트 : https://this-programmer.tistory.com/entry/%EA%B0%84%EB%8B%A8%ED%95%9C-react-JS-Django-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'password',
            'username',
            'ip_address'
        )

        model = Account