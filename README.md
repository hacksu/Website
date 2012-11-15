website
=======

Repository that contains code for the website located at http://www.hacksu.cs.kent.edu

###To Run:
python manage.py runserver

###To Sync database:
python manage.py syncdb

##Common Problems

**Can not write to a read only database**
    sudo chgrp -R apache www/*