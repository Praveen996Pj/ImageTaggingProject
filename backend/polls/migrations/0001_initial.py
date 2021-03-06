# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-12 06:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_path', models.ImageField(upload_to=b'')),
            ],
        ),
        migrations.CreateModel(
            name='ImageInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=100)),
                ('x_cord', models.CharField(blank=True, max_length=2000, null=True)),
                ('y_cord', models.CharField(blank=True, max_length=2000, null=True)),
                ('imageid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracks', to='polls.Image')),
            ],
        ),
    ]
