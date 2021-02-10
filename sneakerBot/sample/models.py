from django.db import models

# Create your models here.

class User(models.Model) :
    user_id = models.CharField(max_length=50)
    user_pw = models.CharField(max_length=256)

    def __str__(self) :
        return 'ID : {}, PW : {}'.format(self.user_id, self,user_pw)
