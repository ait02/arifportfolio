from django.shortcuts import render
from .models import Contact
from django.contrib import messages

# Create your views here.

def homePage(request):
    if request.method == 'POST':
        contact = Contact()
        contact.name = request.POST['name']
        contact.email = request.POST['email']
        contact.message = request.POST['message']
        contact.save()
        messages.success(request, f"Thank you for reaching me Mr/Mrs {contact.name.capitalize()} :)")
        return render(request, 'frontend/index.html')
    else:
        return render(request, 'frontend/index.html')