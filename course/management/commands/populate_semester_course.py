from django.core.management.base import BaseCommand
from course.models import Semester, Course
import json
from django.conf import settings
import os

semester_data_file = os.path.join(settings.BASE_DIR, 'course', 'management', 'commands', 'semester_data.json')
course_data_file = os.path.join(settings.BASE_DIR, 'course', 'management', 'commands', 'course_data.json')

class Command(BaseCommand):
    help = 'Populate database with initial semesters and courses'

    def handle(self, *args, **options):
        try:
            semesters_data = json.load(open(semester_data_file, 'r'))
            courses_data = json.load(open(course_data_file, 'r'))
                        
            # populate semesters first
            semester_objs = []
            for semester in semesters_data:
                semester_obj, created = Semester.objects.get_or_create(code=semester['fields']['code'])
                semester_obj.display_name = semester['fields']['display_name']
                semester_obj.full_name = semester['fields']['full_name']
                semester_obj.code = semester['fields']['code']
                semester_obj.description = semester['fields']['description']
                semester_obj.save()
                semester_objs.append(semester_obj)
                
                if created:
                    print("Semester created:", semester_obj.display_name)
                else:
                    print("Semester already exists, updated:", semester_obj.display_name)
            print("Semesters data populated\n")

            # populate courses
            for course in courses_data:
                course_obj, created = Course.objects.get_or_create(course_code=course['fields']['course_code'])
                course_obj.title = course['fields']['title']
                course_obj.semester = semester_objs[course['fields']['semester'] - 1]
                course_obj.save()

                if created:
                    print("Course created:", course_obj.title)
                else:
                    print("Course already exists, updated:", course_obj.title)
            
            print("Courses data populated")
        except Exception as e:
            print("Error populating database with initial semesters and courses", e)