from rest_framework import serializers
from .models import *

class Admin_info_serializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True,error_messages={
        "required":"id字段不能为空"
    })

    username=serializers.CharField(error_messages={
        "required":"username字段不能为空"
    })
    password=serializers.CharField(error_messages={
        "required":"password字段不能为空"
    })
    create_at=serializers.DateTimeField(read_only=True,error_messages={
        "required":"create_at字段不能为空"
    })

    class Meta:
        db_table="user_info"


class Opinion_serializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    number_id=serializers.CharField()
    content=serializers.CharField()
    flag=serializers.IntegerField()
    show = models.IntegerField()
    create_at=serializers.DateTimeField()
