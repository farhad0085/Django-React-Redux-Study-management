# Generated by Django 3.1.4 on 2020-12-15 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0011_auto_20201215_0136'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='title',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
