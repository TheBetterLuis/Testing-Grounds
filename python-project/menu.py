import os
import time
import sys
import re
from clEmail import sendEmail as welcome_email
from updateLine import update_text_file
from openProgram import welcome_whatsapp

DATABASE_FILE = "./database.txt"


def view_users():
    os.system("clear")
    try:
        with open(DATABASE_FILE, "r") as file:
            line_number = 1
            for line in file:
                name, last_name, birth_date, country, email, phone_number = (
                    line.strip().split(",")
                )
                print(f"\nLine:{line_number}")
                print(f"Name: {name.capitalize()}")
                print(f"Last Name: {last_name.capitalize()}")
                print(f"Birth Date: {birth_date}")
                print(f"Country: {country.upper()}")
                print(f"Email: {email}")
                print(f"Phone: {phone_number}\n")
                line_number = line_number + 1
    except FileNotFoundError:
        print(f"File '{DATABASE_FILE}' not found.\nadd users to create file :)")
        time.sleep(2)
        menu_selection()
    option = int(input("View users\nplease select an option\n|1| Go back to menu\n"))

    match option:
        case 1:
            menu_selection()
        case _:
            print("Invalid option, try again :)")
            time.sleep(0.8)
            view_users()


def search_users():
    os.system("clear")
    try:
        with open(DATABASE_FILE, "r") as file:
            pass
        option = int(
            input(
                "Search users\nplease select an option\n|1| Search by name\n|2| Search by last name\n|3| Search by birth date\n|4| Search by country\n|5| Search by email\n|6| Search by phone number\n|7| Go back to menu\n"
            )
        )
        match option:
            case 1:
                print("Search by name")
                search_filter = "name"
            case 2:
                print("Search by last name")
                search_filter = "last_name"
            case 3:
                print("Search by birth date")
                search_filter = "birth_date"
            case 4:
                print("Search by country")
                search_filter = "country"
            case 5:
                print("Search by email")
                search_filter = "email"
            case 6:
                print("Search by phone number")
                search_filter = "phone_number"
            case 7:
                print("Going back to menu :)")
                menu_selection()
            case _:
                print("Invalid option, try again :)")
                time.sleep(0.8)
                search_users()

    except FileNotFoundError:
        print(f"File '{DATABASE_FILE}' not found.\nadd users to create file :)")
        time.sleep(2)
        menu_selection()

    search_value = str(input(f"enter {search_filter}\n")).lower()
    field_mapping = {
        "name": 0,
        "last_name": 1,
        "birth_date": 2,
        "country": 3,
        "email": 4,
        "phone_number": 5,
    }
    with open(DATABASE_FILE, "r") as file:
        line_number = 0
        for line in file:
            line_number = line_number + 1
            fields = line.strip().split(",")
            if fields[field_mapping[search_filter]].lower() == search_value.lower():
                print(f"\nLine:{line_number}")
                print(f"Name: {fields[0].capitalize()}")
                print(f"Last Name: {fields[1].capitalize()}")
                print(f"Birth Date: {fields[2]}")
                print(f"Country: {fields[3].upper()}")
                print(f"Email: {fields[4]}")
                print(f"Phone: {fields[5]}\n")
    option = int(
        input(
            "Search users\nplease select an option\n|1| Another Search\n|2| Edit User\n|3| Go back to menu\n"
        )
    )
    match option:
        case 1:
            search_users()
        case 2:
            edit_users()
        case _:
            menu_selection()


def does_email_exist(email):
    try:
        with open(DATABASE_FILE, "r") as file:
            for line in file:
                fields = line.strip().split(",")
                if fields[4] == email:
                    return True

    except FileNotFoundError:
        return False
    return False


def does_number_exist(number):
    try:
        with open(DATABASE_FILE, "r") as file:
            for line in file:
                fields = line.strip().split(",")
                if fields[5] == number:
                    return True

    except FileNotFoundError:
        return False
    return False


def register_user(name, last_name, birth_date, country, email, phone_number):
    with open(DATABASE_FILE, "a") as file:
        file.write(
            f"{name},{last_name},{birth_date},{country},{email},{phone_number}\n"
        )


def get_value(field):
    print(
        "Rules\nName - No spaces\nLast Name - No spaces\nBirth Date - date format ddmmyy (30-10-96)\nCountry - No Spaces(use underscore or dash if needed)\nEmail - Valid email address (john@domain.com)\nPhone Number - (+589999999999) "
    )
    if field == "name":
        regex = r"^\S+$"
    if field == "last_name":
        regex = r"^\S+$"
    if field == "birth_date":
        regex = r"^\d{2}-\d{2}-\d{2}$"
    if field == "country":
        regex = r"^\S+$"
    if field == "email":
        regex = r"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
    if field == "phone_number":
        regex = r"^\+\d{10,13}$"

    value = str(input(f"enter {field}\n"))

    if re.match(regex, value):
        if field == "email":
            if does_email_exist(value):
                os.system("clear")
                print(f"sorry, that email({value}) is already in the database")
                get_value(field)

        if field == "phone_number":
            if does_number_exist(value):
                os.system("clear")
                print(f"sorry, that phone number({value}) is already in the database")
                get_value(field)

        os.system("clear")
        return value
    else:
        os.system("clear")
        print(f"Invalid {field} value  try again:)")
        get_value(field)


def add_users():
    os.system("clear")
    option = int(
        input("Add users\nplease select an option\n|1| Add user\n|2| Go back to menu\n")
    )

    match option:
        case 1:
            os.system("clear")
            name = get_value("name")
            last_name = get_value("last_name")
            birth_date = get_value("birth_date")
            country = get_value("country")
            email = get_value("email")
            phone_number = get_value("phone_number")
            # if it reaches this point it means user already added each value and it's valid and both email and phone number are new to the database
            register_user(name, last_name, birth_date, country, email, phone_number)
            print("user added successfully :)")
            welcome_email(email,name)
            welcome_whatsapp(phone_number,"Welcome!",f"{name} {last_name}");
            time.sleep(1)
            add_users()

        case 2:
            menu_selection()
        case _:
            print("Invalid option, try again :)")
            time.sleep(0.8)
            add_users()


def edit_users():
    try:
        with open(DATABASE_FILE, "r") as file:
            line_number = 0
            for line in file:
                line_number = line_number +1
        user_to_edit = int(input(f"Enter line number for user to edit (1-{line_number})\n"))
        if user_to_edit <= 0 or user_to_edit > line_number:
            print("out of bounds :)")
            time.sleep(1)
            edit_users()
        with open(DATABASE_FILE, "r") as file:
            another_line = 0
            for line in file:
                another_line = another_line +1
                if another_line == user_to_edit:
                    fields = line.strip().split(",")
                    option = int(input(f"What do you want to edit?\nName: {fields[0].capitalize()}[1]\nLast Name: {fields[1].capitalize()}[2]\nBirth Date: {fields[2]}[3]\nCountry: {fields[3].upper()}[4]\nEmail: {fields[4]}[5]\nPhone: {fields[5]}[6]\n"))
                    while option < 1 or option> 6:
                        os.system("clear")
                        print("please only select values from 1-6")
                        option = int(input(f"What do you want to edit?\nName: {fields[0].capitalize()}[1]\nLast Name: {fields[1].capitalize()}[2]\nBirth Date: {fields[2]}[3]\nCountry: {fields[3].upper()}[4]\nEmail: {fields[4]}[5]\nPhone: {fields[5]}[6]\n"))
                    match option:
                        case 1:
                            name = get_value("name")
                            new_line = f"{name},{fields[1]},{fields[2]},{fields[3]},{fields[4]},{fields[5]}\n"
                        case 2:
                            last_name = get_value("last_name")
                            new_line = f"{fields[0]},{last_name},{fields[2]},{fields[3]},{fields[4]},{fields[5]}\n"
                        case 3:
                            birth_date = get_value("birth_date")
                            new_line = f"{fields[0]},{fields[1]},{birth_date},{fields[3]},{fields[4]},{fields[5]}\n"
                        case 4:
                            country = get_value("country")
                            new_line = f"{fields[0]},{fields[1]},{fields[2]},{country},{fields[4]},{fields[5]}\n"
                        case 5:
                            email = get_value("email")
                            new_line = f"{fields[0]},{fields[1]},{fields[2]},{fields[3]},{email},{fields[5]}\n"
                        case 6:
                            phone_number = get_value("phone_number")
                            new_line = f"{fields[0]},{fields[1]},{fields[2]},{fields[3]},{fields[4]},{phone_number}\n"
            update_text_file(DATABASE_FILE, user_to_edit-1, new_line)
            print("updated successfully :)\nredirecting back to menu...")
            time.sleep(1.5)
            menu_selection()

    except FileNotFoundError:
        print(f"File '{DATABASE_FILE}' not found.\nadd users to create file :)")
        time.sleep(2)
        menu_selection()


def menu_selection():
    os.system("clear")
    option = int(
        input(
            "User database\nplease select an option\n|1| View users\n|2| Add users\n|3| Edit users\n|4| Search users\n|5| Exit\n"
        )
    )

    match option:
        case 1:
            view_users()
        case 2:
            add_users()
        case 3:
            edit_users()
        case 4:
            search_users()
        case 5:
            print("See you later :)")
            sys.exit()
        case _:
            print("Invalid option, try again :)")
            time.sleep(0.8)
            menu_selection()


# launching the program
menu_selection()
