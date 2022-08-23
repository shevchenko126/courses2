from lesson.celery import app
from django.core.mail import send_mail
from lesson.models import Student


@app.task
def send_student_mail():
    send_mail('Subject', 'Subjects', 'no-reply@online-front.pp.ua', ['dima.shevchenkooo@gmail.com'], fail_silently=True)
    print('CELERY PRINT')
    return 'OK'

