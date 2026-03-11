from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ServiceViewSet, BlogPostViewSet, FAQViewSet, 
    TestimonialViewSet, ContactMessageViewSet
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'blog', BlogPostViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
