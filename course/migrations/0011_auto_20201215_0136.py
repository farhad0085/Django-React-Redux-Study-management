# Generated by Django 3.1.4 on 2020-12-14 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0010_auto_20201215_0026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='books',
            field=models.ManyToManyField(blank=True, related_name='posts', to='course.Book'),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]