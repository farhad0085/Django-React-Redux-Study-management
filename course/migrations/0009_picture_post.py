# Generated by Django 3.1.4 on 2020-12-13 20:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0008_auto_20201214_0236'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='post',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='pictures', to='course.post'),
            preserve_default=False,
        ),
    ]
