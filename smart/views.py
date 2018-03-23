from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.template import RequestContext
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
# Create your views here.
from smart.forms import GuessDiseaseForm
from smart.models import Disease, Sysptom


@csrf_exempt
def homepageview(request, template_name='home.html'):
    context = RequestContext(request)
    if request.method == 'POST' and 'step11' in request.POST:
        headache = request.POST['headache']
        cold = request.POST['cold']
        x = Sysptom.objects.filter(disease__name=headache)

        return HttpResponseRedirect(reverse_lazy('home'))
    return render(request, template_name, locals(), context)


class firstaidview(TemplateView):
    template_name = 'firstaid.html'
