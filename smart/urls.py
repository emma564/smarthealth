from django.urls import path
from . import views

urlpatterns = [
    # path('', views.homepageview.as_view(), name='home'),
    path('firstaid/', views.firstaidview.as_view(), name='firstaid'),
    path('', views.homepageview, name='home'),


]