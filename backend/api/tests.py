from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Service, FAQ

class ApiTests(APITestCase):
    def test_get_services(self):
        Service.objects.create(title="Test Service", description="Test Desc")
        url = reverse('service-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_faqs(self):
        FAQ.objects.create(question="Q?", answer="A!")
        url = reverse('faq-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_contact_submission(self):
        url = reverse('contactmessage-list')
        data = {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Hello",
            "message": "Test message"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
