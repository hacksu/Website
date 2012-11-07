from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('backend.views',
    url(r'^$', 'index'),
    url(r'^leaders$', 'leaders'),
)

urlpatterns += patterns('',
    url(r'^admin/', include(admin.site.urls)),
)