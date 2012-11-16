website
=======

Repository that contains code for the website located at http://www.hacksu.cs.kent.edu

###To Run:

    python manage.py runserver

###To Sync database:

    python manage.py syncdb

###To Restart server

    sudo /etc/init.d/httpd restart


Can not write to a read only database

    sudo chgrp -R apache www/*

##Common Problems

Can not write to a read only database

    sudo chgrp -R apache www/*



##Migration

Using [django-evolution](http://code.google.com/p/django-evolution/)

    1. Run python manage.py syncdb
    2. Make modifications to the model files in your project
    3. Run ./manage.py evolve --hint --execute

More detailed instructions foind [here](http://django-evolution.googlecode.com/svn/trunk/docs/evolution.txt)