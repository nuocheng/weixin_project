from django.shortcuts import render,redirect,reverse
from .models import *
# Create your views here.



#创建修饰器，判断管理员是否登录
def login_required(func):
    def exist_login(request):
        user_name=request.session['username']
        password=request.session['password']
        user_demo=Admin_info.objects.get(username=user_name,password=password)
        if user_demo:
            return func()
        else:
            return redirect(reverse())

#管理员登录
def login_user(request):
    if request.method=="GET":
        return render(request,"login.html")
    else:
        return
#首页面
def index(request):
    if request.method=="GET":
        return render(request,"index.html")


