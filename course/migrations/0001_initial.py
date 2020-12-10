# Generated by Django 3.1.4 on 2020-12-09 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[['1-1', '1 - 1'], ['1-2', '1 - 2'], ['2-1', '2 - 1'], ['2-2', '2 - 2'], ['3-1', '3 - 1'], ['3-2', '3 - 2'], ['4-1', '4 - 1'], ['4-2', '4 - 2']], max_length=6)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_code', models.CharField(max_length=8)),
                ('title', models.CharField(max_length=200)),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='course.semester')),
            ],
        ),
    ]
