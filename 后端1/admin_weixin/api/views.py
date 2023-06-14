import json

from django.shortcuts import render,redirect,reverse
from django.http import JsonResponse
from .models import *
from collections import Counter
import jieba
import pandas as pd
from .serializer_change import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import StreamingHttpResponse
from django.core import serializers
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
        if int(flag)==1:   #进行匿名
            # name="*********"
            # number_id="*********"
            pass
        else:
            pass
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

@login_required
def delete_info(request):
    if request.method=='GET':
        id=request.GET.get("id")
        opinion_demo=Opinion.objects.get(id=id)
        if opinion_demo:
            opinion_demo.delete()
        op_all_info = Opinion.objects.all()
        all_info = []
        for item in op_all_info:
            demo = Image.objects.filter(op_id=item)
            image_file = []
            for i in demo:
                image_file.append(i.image)
            info = {
                "id": item.id,
                "name": item.name,
                "number_id": item.number_id,
                "title": item.title,
                "content": item.content,
                "flag": item.flag,
                "show": item.show,
                "create_at": item.create_at,
                "image": image_file
            }
            all_info.append(info)
        return render(request, "index_v1.html", context={"info": all_info})




def get_show(request):
    if request.method=="GET":
        op_all_info=Opinion.objects.filter(show=1)
        all_info=[]
        for item in op_all_info:
            demo=Image.objects.filter(op_id=item)
            image_file=[]
            for i in demo:
                image_file.append(str(i.image))
            if item.flag==1:
                info={
                    "id":item.id,
                    "name":"*"*10,
                    "number_id":"*"*10,
                    "title":item.title,
                    "content":item.content,
                    "flag":item.flag,
                    "show":item.show,
                    "create_at":item.create_at,
                    "image":image_file
                }
            else:
                info = {
                    "id": item.id,
                    "name": item.name,
                    "number_id":item.number_id,
                    "title": item.title,
                    "content": item.content,
                    "flag": item.flag,
                    "show": item.show,
                    "create_at": item.create_at,
                    "image": image_file
                }
            all_info.append(info)
        return JsonResponse({"info":all_info})


def v_show(request):
    if request.method=='GET':
        return render(request,"v-index.html")




def get_info(request):
    def ent_steam():
        all_info=Opinion.objects.filter(show=1)
        data=pd.DataFrame(all_info.values())
        all_num=data.shape[0]
        need_show_num=data.loc[data['flag']==1,:].shape[0]
        ratio_num=round((need_show_num/all_num)*100,2)
        title="".join(data['title'].tolist())
        title_list=list(jieba.cut(title))
        stopwords = [line.strip() for line in [',','，','.','的','得','地','\d']]

        keyword=[]
        for word in title_list:
            if word not in stopwords:
                keyword.append(word)
        op_all_info = Opinion.objects.filter(show=1).order_by("-create_at")
        keywords=dict(Counter(keyword))
        keys=[]
        for item in keywords.keys():
            keys.append({ "value": keywords[item], "name":item  })
        all_info = []
        for item in op_all_info:
            demo = Image.objects.filter(op_id=item)
            image_file = []
            for i in demo:
                image_file.append(str(i.image))
            size_len=len(image_file)
            if item.flag==1:
                info={
                    "id":item.id,
                    "name":"*"*10,
                    "number_id":"*"*10,
                    "title":item.title,
                    "content":item.content,
                    "flag":item.flag,
                    "show":item.show,
                    "create_at":item.create_at.date().strftime("%Y-%m-%d"),
                    "image":image_file
                }
            else:
                info = {
                    "id": item.id,
                    "name": item.name,
                    "number_id":item.number_id,
                    "title": item.title,
                    "content": item.content,
                    "flag": item.flag,
                    "show": item.show,
                    "create_at": item.create_at.date().strftime("%Y-%m-%d"),
                    "image": image_file
                }
            all_info.append(info)

        data={
            "data":all_info,
            "recent":all_info[:7],
            "keywords":keys,
            "show_num":need_show_num,
            "all_num":all_num,
            "ratio_num":ratio_num,

        }
        # print(data)
        # data=serializers.serialize("json",data)
        yield "data:{}\n\n".format(json.dumps(data))

    response = StreamingHttpResponse(ent_steam(), content_type='text/event-stream')
    response['Cache-Control'] = 'no-cache'
    return response



@login_required
def change_flag(request):
    if request.method=='GET':
        id=request.GET.get("id")
        demo=Opinion.objects.get(id=id)
        if demo:
            if demo.flag==1:
                demo.flag=0
            else:
                demo.flag=1
            demo.save()
        op_all_info = Opinion.objects.all()
        all_info = []
        for item in op_all_info:
            demo = Image.objects.filter(op_id=item)
            image_file = []
            for i in demo:
                image_file.append(i.image)
            info = {
                "id": item.id,
                "name": item.name,
                "number_id": item.number_id,
                "title": item.title,
                "content": item.content,
                "flag": item.flag,
                "show": item.show,
                "create_at": item.create_at,
                "image": image_file
            }
            all_info.append(info)
        return render(request, "index_v1.html", context={"info": all_info})




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



