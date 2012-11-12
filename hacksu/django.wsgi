import os
import sys

#sys.path.append('/var/www/hacksu.com/hacksu')
sys.path.append('/var/www/hacksu.com/')

#os.environ['PYTHON_EGG_CACHE'] = '/srv/www/ducklington.org/.python-egg'
os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
