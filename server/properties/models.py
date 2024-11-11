
# server/properties/models.py
from django.db import models

class Property(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
