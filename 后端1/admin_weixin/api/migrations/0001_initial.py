# Generated by Django 3.1 on 2023-05-20 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admin_info',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='userid')),
                ('username', models.CharField(max_length=20, verbose_name='user name')),
                ('password', models.CharField(max_length=20, verbose_name='password')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'user_info',
            },
        ),
        migrations.CreateModel(
            name='Opinion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.CharField(max_length=30, verbose_name='name')),
                ('number_id', models.CharField(max_length=30, verbose_name='num_id')),
                ('content', models.TextField(verbose_name='意见信息')),
                ('flag', models.IntegerField(choices=[(0, '匿名'), (1, '不匿名')], default=0)),
                ('image', models.ImageField(upload_to='%Y%m%d', verbose_name='图片')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'optinion',
            },
        ),
    ]
