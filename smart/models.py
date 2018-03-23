
from django.db import models
class Sysptom(models.Model):
    name = models.CharField(max_length=600)
   # disease=models.ForeignKey(Disease,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Disease(models.Model):
    name = models.CharField(max_length=200)
 #   sysptom=models.CharField(max_length=200)
    sysptom=models.ManyToManyField(Sysptom)

    class Meta:
         db_table='disease'

    def __str__(self):
        return  self.name
