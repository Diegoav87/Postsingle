# Generated by Django 3.1.6 on 2021-02-18 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20210218_1206'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='sub_title',
            new_name='description',
        ),
    ]
