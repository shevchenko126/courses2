from rest_framework import routers
from students.api import GetSubjects

router = routers.DefaultRouter()
router.register('subjects', GetSubjects, 'subjects')

urlpatterns = router.urls