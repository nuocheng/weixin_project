from django.urls import path
from . import views
app_name="admin_home"
urlpatterns = [
    path('', views.index,name="index"),
    path('login/', views.login_user,name="login"),
    path("admin/list/",views.UserClass.as_view()),
    path("logout/",views.logout,name="logout"),
    path("index2/",views.index2,name="index2"),
    path("change_show/",views.change_show,name="change_show"),
    path("add_info/",views.add_info,name="add_info"),
    path("get_show/",views.get_show,name="get_show"),

]