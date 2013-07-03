from django.http import HttpResponse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from hacksu.models import News, NewsLink, Leader, Apps, AppsLink, NewsTopic
from django.core import serializers

def index(request):
    apps = Apps.objects.all()[:3]
    news = News.objects.all().order_by('-date')[:3]
    return render_to_response('index.html', {'apps': apps, 'news_list': news},
                              RequestContext(request))

def leaders(request):
    leaders = Leader.objects.all()      
    return render_to_response('leaders.html', {'leaders': leaders},
                              RequestContext(request))
        
def leader(request, id):
    leader_json = serializers.serialize("json", Leader.objects.filter(id=id))
    return HttpResponse(leader_json, mimetype="application/json")

def apps(request, app_id=None):
    if not app_id:
        apps = Apps.objects.all()
        return render_to_response('apps.html', {'apps': apps},
                                  RequestContext(request))
    else:
        app = Apps.objects.get(id=app_id)
        return render_to_response('apps_single.html', {'app': app},
                                  RequestContext(request))
        
def news(request, news_id=None):
    if not news_id:
        news = News.objects.all().order_by('-date')
        return render_to_response('news.html', {'news_list': news},
                                  RequestContext(request))
    else:
        news = News.objects.get(id=news_id)
        return render_to_response('news_single.html', {'news': news},
                                  RequestContext(request))
        
def learn(request):
    return render_to_response('learn.html', RequestContext(request))

def contact(request):
    return render_to_response('contact.html', RequestContext(request))

def hackathon2012f(request):
    return render_to_response('hackathon2012f.html', RequestContext(request))

def hackathon2013s(request):
    return render_to_response('hackathon2013s.html', RequestContext(request))

def hackathon2013f(request):
    return render_to_response('hackathon2013f.html', RequestContext(request))

def opportunities(request):
    return render_to_response('opportunities.html', RequestContext(request))

def pull(request):
    return HttpResponse(git.pull()) 

