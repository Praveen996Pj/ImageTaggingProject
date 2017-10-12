# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Image(models.Model):
    image_path = models.ImageField(max_length=100)

class ImageInfo(models.Model):
    imageid = models.ForeignKey(Image, related_name='tracks', on_delete=models.CASCADE)
    tag = models.CharField(max_length=100)
    x_cord = models.CharField(max_length=2000, null=True,blank=True)
    y_cord = models.CharField(max_length=2000, null=True,blank=True)
