from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Service, BlogPost, FAQ, Testimonial, ContactMessage
from .serializers import (
    ServiceSerializer, BlogPostSerializer, FAQSerializer, 
    TestimonialSerializer, ContactMessageSerializer
)

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all().order_by('-created_at')
    serializer_class = ServiceSerializer

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogPostSerializer

class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Email göndərmə
        message_data = serializer.validated_data
        subject = f"Yeni Əlaqə Mesajı: {message_data['subject']}"
        body = f"Göndərən: {message_data['name']}\nE-poçt: {message_data['email']}\n\nMesaj:\n{message_data['message']}"
        
        try:
            send_mail(
                subject,
                body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL], # Həkimin e-poçtu kimi qəbul edilir
                fail_silently=False,
            )
        except Exception as e:
            print(f"Email göndərilərkən xəta: {e}")

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
