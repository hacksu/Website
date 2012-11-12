from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('backend.views',
    url(r'^$', 'index'),
    url(r'^leaders$', 'leaders'),
    url(r'^apps$', 'apps'),
    url(r'^contact$', 'contact'),
    url(r'^learn$', 'learn'),
    url(r'^news$', 'news'),
)

urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)