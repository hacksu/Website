from django.shortcuts import render_to_response,  get_object_or_404
from django.template import RequestContext
from backend.models import News, NewsLink, Leader, Apps, AppsLink, NewsTopic

def index(request):
    apps = Apps.objects.all()
    news = News.objects.all().order_by('-date')
    return render_to_response('index.html',{'apps': apps, 'news_list': news},
                              RequestContext(request))

def leaders(request):
    leaders = Leader.objects.all()
    return render_to_response('leaders.html', {'leaders': leaders},
                              RequestContext(request))

def apps(request):
    return render_to_response('apps.html', RequestContext(request))

def news(request):
    return render_to_response('news.html', RequestContext(request))

def learn(request):
    return render_to_response('learn.html', RequestContext(request))

def contact(request):
    return render_to_response('contact.html', RequestContext(request))
