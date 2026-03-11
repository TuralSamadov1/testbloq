from django.contrib import admin
from .models import Service, BlogPost, FAQ, Testimonial, ContactMessage

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question',)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'rating')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'created_at')
    readonly_fields = ('created_at',)
