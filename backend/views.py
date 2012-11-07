from django.shortcuts import render_to_response
from django.template import RequestContext

def index(request):
    return render_to_response('index.html', RequestContext(request))

def leaders(request):
    return render_to_response('leaders.html', RequestContext(request))

def leaders(request):
    return render_to_response('apps.html', RequestContext(request))

def leaders(request):
    return render_to_response('news.html', RequestContext(request))

def leaders(request):
    return render_to_response('learn.html', RequestContext(request))

def leaders(request):
    return render_to_response('contact.html', RequestContext(request))
