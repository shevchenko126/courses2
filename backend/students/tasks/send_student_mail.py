from lesson.celery import app
from django.core.mail import send_mail

@app.task
def send_student_mail(email):
    send_mail('Subject', 'Subjects', 'no-reply@online-front.pp.ua', [email], fail_silently=True)
    print('CELERY PRINT')
    return 'OK'

