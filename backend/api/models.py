from django.db import models

class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    description = models.TextField(verbose_name="Təsvir")
    image = models.ImageField(upload_to="services/", verbose_name="Şəkil")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Xidmət"
        verbose_name_plural = "Xidmətlər"

class BlogPost(models.Model):
    title = models.CharField(max_length=200, verbose_name="Başlıq")
    content = models.TextField(verbose_name="Məzmun")
    image = models.ImageField(upload_to="blog/", verbose_name="Şəkil")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Yaradılma tarixi")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Bloq yazısı"
        verbose_name_plural = "Bloq yazıları"

class FAQ(models.Model):
    question = models.CharField(max_length=255, verbose_name="Sual")
    answer = models.TextField(verbose_name="Cavab")

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQ-lar"

class Testimonial(models.Model):
    name = models.CharField(max_length=100, verbose_name="Ad Soyad")
    comment = models.TextField(verbose_name="Rəy")
    rating = models.IntegerField(default=5, verbose_name="Reytinq (1-5)")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Rəy"
        verbose_name_plural = "Rəylər"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100, verbose_name="Ad Soyad")
    email = models.EmailField(verbose_name="E-poçt")
    subject = models.CharField(max_length=200, verbose_name="Mövzu")
    message = models.TextField(verbose_name="Mesaj")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        verbose_name = "Əlaqə mesajı"
        verbose_name_plural = "Əlaqə mesajları"
