from django.db import models

# Create your models here.

class Admin_info(models.Model):
    id=models.AutoField("userid",primary_key=True,null=False,blank=False)

    username=models.CharField("user name",max_length=20,null=False,blank=False)
    password=models.CharField("password",max_length=20,null=False,blank=False)
    create_at=models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table="user_infos"


class Opinion(models.Model):
    id=models.AutoField("id",primary_key=True,null=False,blank=False)
    name=models.CharField("name",max_length=30,null=False,blank=False)
    number_id=models.CharField("num_id",max_length=30,null=False,blank=False)
    title=models.CharField("title",max_length=30,null=False,blank=False)
    content=models.TextField("意见信息")
    flag=models.IntegerField(choices=((0,"匿名"),(1,"不匿名")),default=0)
    show=models.IntegerField(choices=((0,"不进行展示"),(1,"进行展示")),default=0)
    create_at=models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table="optinions"

class Image(models.Model):
    id=models.AutoField("id",primary_key=True,null=False,blank=False)
    op_id=models.ForeignKey(Opinion,on_delete=models.CASCADE)
    image = models.ImageField("图片", upload_to="%Y%m%d")

    class Meta:
        db_table="images"
