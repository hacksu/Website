from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('backend.views',
    url(r'^$', 'index'),
    url(r'^leaders$', 'leaders'),
    url(r'^apps$', 'apps'),
    url(r'^apps/(?P<app_id>\d+)/$', 'apps'),
    url(r'^contact$', 'contact'),
    url(r'^learn$', 'learn'),
    url(r'^news$', 'news'),
    url(r'^news/(?P<news_id>\d+)/$', 'news'),

)

urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)