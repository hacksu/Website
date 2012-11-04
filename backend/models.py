from django.db import models


class AppsLink(models.Model):
    url = models.CharField(max_length=500)
    title = models.CharField(max_length=200)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'Apps - Links'
        verbose_name_plural = 'Apps - Links'


class Apps(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=3000)
    links = models.ManyToManyField(AppsLink)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'Apps'
        verbose_name_plural = 'Apps'


class NewsLink(models.Model):
    url = models.CharField(max_length=500)
    title = models.CharField(max_length=200)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'News - Links'
        verbose_name_plural = 'News - Links'


class News(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=3000)
    links = models.ManyToManyField(NewsLink)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'News'
        verbose_name_plural = 'News'


class Leader(models.Model):
    name = models.CharField(max_length=100)
    website = models.CharField(max_length=200, blank=True)
    email = models.EmailField(max_length=200, blank=True)
    description = models.TextField(max_length=1500)

    def __unicode__(self):
        return self.name
