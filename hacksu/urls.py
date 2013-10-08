from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('hacksu.views',
    url(r'^$', 'index'),
    url(r'^leaders/$', 'leaders'),
    url(r'^contact/$', 'contact'),
    url(r'^learn/$', 'learn'),
    url(r'^kent-hack-enough-2013/$', 'khe2013'),
    url(r'^hackathon2013f/$', 'khe2013'),
    url(r'^khe2013/$', 'khe2013'),
    url(r'^leaders/(\d{1,2})/$', 'leader'),
    url(r'^opportunities/$', 'opportunities'),
)

urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)
