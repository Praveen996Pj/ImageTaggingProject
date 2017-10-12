from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from polls import views

urlpatterns = [
    url(r'^res1/$', views.SnippetList1.as_view()),
    url(r'^res2/$', views.SnippetList2.as_view()),
    url(r'^result/(?P<pk>[0-9]+)/$', views.SnippetDetail.as_view()),
]
