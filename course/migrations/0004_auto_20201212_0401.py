# Generated by Django 3.1.4 on 2020-12-11 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_post'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='semester',
            name='name',
        ),
        migrations.AddField(
            model_name='semester',
            name='code',
            field=models.IntegerField(default=11, verbose_name='Semester Code'),
        ),
        migrations.AddField(
            model_name='semester',
            name='display_name',
            field=models.CharField(default='1/1', max_length=6),
        ),
        migrations.AddField(
            model_name='semester',
            name='full_name',
            field=models.CharField(default='First Year, First Semester', max_length=50),
        ),
        migrations.AlterField(
            model_name='course',
            name='course_code',
            field=models.CharField(max_length=8, unique=True),
        ),
        migrations.AlterField(
            model_name='semester',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
