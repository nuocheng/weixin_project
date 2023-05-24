from django.shortcuts import render,redirect,reverse
from django.http import JsonResponse
from .models import *
from .serializer_change import *
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.



#创建修饰器，判断管理员是否登录
def login_required(func):
    def exist_login(request):
        user_name=request.session.get("username")
        password=request.session.get("password")
        user_demo=Admin_info.objects.filter(username=user_name,password=password)
        if len(user_demo)>=1:
            return func(request)
        else:
            return redirect(reverse("admin_home:login"))
    return exist_login


def logout(request):
    if request.method=='GET':
        request.session.flush()
        return redirect(reverse("admin_home:login"))

#管理员登录
def login_user(request):
    if request.method=="GET":
        return render(request,"login.html")
    else:
        username = request.POST.get("username")
        password = request.POST.get("password")
        user_demo = Admin_info.objects.filter(username=username, password=password)
        if len(user_demo)>=1:
            request.session['username'] = username
            request.session['password'] = password
            return JsonResponse({"flag": 1, "message": "success"})
        else:
            return JsonResponse({"flag": 0, "message": "error"})
#首页面
@login_required
def index(request):
    if request.method=="GET":
        return render(request,"index.html")

@login_required
def index2(request):
    if request.method=="GET":
        op_all_info=Opinion.objects.all()
        all_info=[]
        for item in op_all_info:
            demo=Image.objects.filter(op_id=item)
            image_file=[]
            for i in demo:
                image_file.append(i.image)
            info={
                "id":item.id,
                "name":item.name,
                "number_id":item.number_id,
                "title":item.title,
                "content":item.content,
                "flag":item.flag,
                "show":item.show,
                "create_at":item.create_at,
                "image":image_file
            }
            all_info.append(info)
        return render(request,"index_v1.html",context={"info":all_info})

@login_required
def change_show(request):
    if request.method=='GET':
        id=request.GET.get("id")
        value=request.GET.get("value")
        opti_demo=Opinion.objects.filter(id=id)
        if len(opti_demo)>=1:
            opti_demo[0].show=value
            opti_demo[0].save()
        return redirect(reverse("admin_home:index2"))


def add_info(request):
    if request.method=="POST":
        flag=request.POST.get("flag")
        print(flag)
        if int(flag)==0:
            name="*********"
            number_id="*********"
        else:
            name=request.POST.get("name")
            number_id=request.POST.get("number_id")
        title=request.POST.get("title")
        content=request.POST.get('content')
        image=request.FILES.getlist("image")

        demo=Opinion()
        demo.name=name
        demo.number_id=number_id
        demo.title=title
        demo.content=content
        demo.flag=flag
        demo.save()
        if len(image)>=1:
            for item in image:
                images = Image()
                images.op_id=demo
                images.image=item
                images.save()
        return JsonResponse({"flag":1,"message":"success"})













#获取所有管理员信息api
class UserClass(APIView):
    def get(self,request):
        user_list=Admin_info.objects.all()
        return Response(Admin_info_serializer(instance=user_list,many=True).data)

    def post(self,request):
        data=request.data
        print(data)
        serializer=Admin_info_serializer(data=data)
        if serializer.is_valid():
            serial_data=Admin_info.objects.create(**serializer.validated_data)
            return Response(Admin_info_serializer(instance=serial_data).data)
        else:
            return Response(serializer.errors)



