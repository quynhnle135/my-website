"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2179],{4224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(5893),s=t(1151);const r={title:"Sep 12, 2023"},i="Coding Journal: Sep 12, 2023",o={id:"learning-journal/September/20230912",title:"Sep 12, 2023",description:"Working on Expense Management OOP",source:"@site/docs/learning-journal/September/20230912.md",sourceDirName:"learning-journal/September",slug:"/learning-journal/September/20230912",permalink:"/docs/learning-journal/September/20230912",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 12, 2023"},sidebar:"tutorialSidebar",previous:{title:"Sep 05, 2023",permalink:"/docs/learning-journal/September/20230905"},next:{title:"Sep 13, 2023",permalink:"/docs/learning-journal/September/20230913"}},l={},d=[{value:"Working on Expense Management OOP",id:"working-on-expense-management-oop",level:3},{value:"Expense class",id:"expense-class",level:5},{value:"User class",id:"user-class",level:5},{value:"Main class",id:"main-class",level:5},{value:"Notes",id:"notes",level:3}];function p(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"coding-journal-sep-12-2023",children:"Coding Journal: Sep 12, 2023"}),"\n",(0,a.jsx)(n.h3,{id:"working-on-expense-management-oop",children:"Working on Expense Management OOP"}),"\n",(0,a.jsx)(n.h5,{id:"expense-class",children:"Expense class"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="expense.py"',children:'from typing import Optional\nimport datetime\n\n\nclass Expense:\n    last_id = 0\n\n    def __init__(self, card_name: str, title: str, expense_date: datetime.date, amount: float, category: str,\n                 note: Optional[str] = None):\n        Expense.last_id += 1\n        self.id = Expense.last_id\n        self.card_name = card_name\n        self.title = title\n        self.expense_date = expense_date\n        self.amount = amount\n        self.category = category\n        self.note = note\n\n    def __str__(self):\n        return f"ID: {self.id}\\nCard name: {self.card_name}\\nTitle: {self.title}\\n" \\\n               f"Date: {str(self.expense_date)}\\nAmount: {self.amount}\\nCategory: {self.category}\\n" \\\n               f"Notes: {self.note}\\n***"\n\n'})}),"\n",(0,a.jsx)(n.h5,{id:"user-class",children:"User class"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="user.py"',children:'import datetime\nfrom expense import Expense\n\n\nclass User:\n    def __init__(self):\n        self.total_expenses = []\n\n    def menu(self):\n        while True:\n            user_choice = self.get_menu_choice()\n            self.process_choice(user_choice)\n\n            cont = input("Do you want to continue? Yes (Y) or No (N): ").lower()\n            if cont == \'n\':\n                print("Goodbye!")\n                break\n\n    def get_menu_choice(self) -> str:\n        return input(\n            "---Welcome to Expense Management App---\\n"\n            "1. Add expense\\n"\n            "2. Calculate total expenses\\n"\n            "3. Edit an expense\\n"\n            "4. Delete an expense\\n"\n            "5. Search an expense\\n"\n            "6. View all expenses\\n"\n            "7. Calculate total by category\\n"\n            "8. View all categories\\n"\n        )\n\n    def process_choice(self, choice: str):\n        if choice == "1":\n            print("---Add expense---")\n            card_name = input("Enter card name: ")\n            title = input("Enter title: ")\n\n            print("-Transaction date-")\n            expense_date = self._get_date_from_user(prompt="Enter the expense")\n\n            amount = float(input("Enter the expense amount: "))\n            category = input("Enter category: ")\n            note = input("Enter note (optional): ")\n\n            expense = Expense(card_name, title, expense_date, amount, category, note)\n            self.total_expenses.append(expense)\n\n        elif choice == "2":\n            print("---Calculate Total---")\n            total = self.calculate_total()\n            print(f"Total amount: {total}")\n\n        elif choice == "3":\n            print("---Edit an expense---")\n            edit_id = input("Enter the expense ID you want to edit: ")\n            self.edit_expense(search_id=edit_id)\n\n        elif choice == "4":\n            search_id = int(input("Enter the ID of the expense you want to delete: "))\n            self.delete_expense(search_id)\n\n        elif choice == "5":\n            print("---Search---")\n            self.search()\n\n        elif choice == "6":\n            print("---View all expenses---")\n            self.view_all_expense()\n\n        elif choice == "7":\n            print("---Calculate total by category---")\n            self.calculate_total_by_category()\n\n        elif choice == "8":\n            print("---View all categories---")\n            self.view_all_categories()\n\n        else:\n            print("Invalid choice!")\n\n    def add_expense(self, expense):\n        self.total_expenses.append(expense)\n\n    def calculate_total(self):\n        total = 0\n        for expense in self.total_expenses:\n            total += expense.amount\n        return total\n\n    def edit_expense(self, search_id):\n        # Search for expense by ID\n        expense = self._find_expense_by_id(search_id)\n\n        # Exit function if the expense is not found\n        if expense is None:\n            print("Invalid ID")\n            return\n\n        # Show editing options to the user\n        edit_choice = self._get_edit_choice()\n\n        # Apply the edit based on user\'s choice\n        if self._apply_edit_to_expense(edit_choice, expense):\n            print("Successfully edited!")\n        else:\n            print("Invalid choice")\n\n    def _find_expense_by_id(self, search_id):\n        for expense in self.total_expenses:\n            if expense.id == int(search_id):\n                return expense\n        return None\n\n    def _get_edit_choice(self):\n        return input("What field do you want to edit?\\n"\n                     "1. Card name\\n"\n                     "2. Title\\n"\n                     "3. Expense date\\n"\n                     "4. Amount\\n"\n                     "5. Category\\n"\n                     "6. Note\\n")\n\n    def _apply_edit_to_expense(self, edit_choice, expense):\n        if edit_choice == "1":\n            new_card_name = input("Enter new card name: ")\n            expense.card_name = new_card_name\n            return True\n\n        elif edit_choice == "2":\n            new_title = input("Enter new title: ")\n            expense.title = new_title\n            return True\n\n        elif edit_choice == "3":\n            try:\n                new_expense_date = self._get_date_from_user(prompt="Enter the expense")\n\n                # Check if the entered date is in the future\n                current_date = datetime.date.today()\n                if new_expense_date > current_date:\n                    print("The entered date cannot be in the future. Please try again.")\n                    return False\n\n                expense.expense_date = new_expense_date\n                return True\n\n            except ValueError:\n                print("Invalid date entered. Please try again.")\n                return False\n\n        elif edit_choice == "4":\n            new_amount = float(input("Enter new amount: "))\n            expense.amount = new_amount\n            return True\n\n        elif edit_choice == "5":\n            new_category = input("Enter new category: ")\n            expense.category = new_category\n            return True\n\n        elif edit_choice == "6":\n            new_note = input("Enter new note: ")\n            expense.note = new_note\n            return True\n\n        return False\n\n    def delete_expense(self, search_id):\n        found = False\n        for expense in self.total_expenses:\n            if expense.id == search_id:\n                self.total_expenses.remove(expense)\n                found = True\n                break\n\n        if found:\n            print("Successfully deleted!")\n        else:\n            print("Cannot find expense")\n\n    def view_all_expense(self):\n        if self.total_expenses:\n            for expense in self.total_expenses:\n                print(expense)\n        else:\n            print("No available expense.")\n\n    def view_all_categories(self):\n        categories = {}\n        for expense in self.total_expenses:\n            current_category = expense.category.lower()\n            if current_category in categories:\n                categories[current_category] += 1\n            else:\n                categories[current_category] = 1\n        print("--- All Categories ---")\n        for key in categories:\n            if categories[key] < 2:\n                print(f"{key}: {categories[key]} expense.")\n            else:\n                print(f"{key}: {categories[key]} expenses.")\n\n    def calculate_total_by_category(self):\n        search_category = input("Enter the category you want to calculate: ")\n        found_expenses = []\n        total = 0\n        for expense in self.total_expenses:\n            if expense.category.lower() == search_category.lower():\n                found_expenses.append(expense)\n\n        if found_expenses:\n            for e in found_expenses:\n                total += e.amount\n            print(f"Total amount of expense in {search_category} category is ${total}")\n        else:\n            print(f"Cannot find any expense in {search_category} category.")\n\n    def search(self):\n        user_input = input("What field do you want to search expense by?\\n"\n                           "1. ID\\n"\n                           "2. Category\\n"\n                           "3. Card Name\\n"\n                           "4. Date\\n"\n                           "5. Amount\\n"\n                           "6. Note\\n")\n\n        if user_input == "1":\n            print("- Search by ID -")\n            search_id = input("Please enter the ID to look up: ")\n            self._search_by_id(search_id=search_id)\n\n        elif user_input == "2":\n            print("- Search by category -")\n            search_category = input("Please enter the category to look up: ")\n            self._search_by_category(category=search_category)\n\n        elif user_input == "3":\n            print("- Search by card name -")\n            search_card_name = input("Please enter the Card name to look up: ")\n            self._search_by_card_name(card_name=search_card_name)\n\n        elif user_input == "4":\n            print("- Search by transaction date period -")\n            try:\n                search_start_date = self._get_date_from_user(prompt="Enter the starting")\n                is_valid, message = self._validate_date(search_start_date)\n                if not is_valid:\n                    print(message)\n                    return\n\n                search_end_date = self._get_date_from_user(prompt="Enter the ending")\n                is_valid, message = self._validate_date(search_end_date)\n                if not is_valid:\n                    print(message)\n                    return\n\n                # Validate that the start date is before or equal to the end date\n                if search_start_date > search_end_date:\n                    print("The start date must be before or equal to the end date. Please try again.")\n                    return\n\n                # Validate if the entered date is in the future\n                current_date = datetime.date.today()\n                if search_start_date > current_date or search_end_date > current_date:\n                    print("The entered date cannot be in the future. Please try again.")\n                    return\n\n                self._search_by_date(start_date=search_start_date, end_date=search_end_date)\n\n            except ValueError as e:\n                print(f"An error occurred: {e}")\n                print("Please enter a valid date.")\n\n        elif user_input == "5":\n            print("- Search by amount -")\n            search_start_amount = float(input("Please enter the starting amount: "))\n            search_end_amount = float(input("Please enter the ending amount: "))\n\n            self._search_by_amount(start_amount=search_start_amount, end_amount=search_end_amount)\n\n        elif user_input == "6":\n            print("- Search by note - ")\n            search_note = input("Enter search note: ")\n            self._search_by_note(note=search_note)\n\n        else:\n            print("Invalid choice!")\n\n    def _search_by_id(self, search_id):\n        found = False\n        found_expense = None\n        for expense in self.total_expenses:\n            if expense.id == int(search_id):\n                found = True\n                found_expense = expense\n                break\n        if found:\n            print("Found the expense!")\n            print(found_expense)\n        else:\n            print("Couldn\'t find the expense!")\n\n    def _search_by_category(self, category):\n        found_expenses = []\n        for expense in self.total_expenses:\n            if expense.category.lower() == category.lower():\n                found_expenses.append(expense)\n\n        if found_expenses:\n            print(f"Expenses in {category} category: ")\n            for e in found_expenses:\n                print(e)\n        else:\n            print(f"Cannot find any expense in {category} category")\n\n    def _search_by_card_name(self, card_name):\n        found_expenses = []\n        for expense in self.total_expenses:\n            if expense.card_name.lower() == card_name.lower():\n                found_expenses.append(expense)\n\n        if found_expenses:\n            print(f"Expenses with {card_name} card: ")\n            for e in found_expenses:\n                print(e)\n        else:\n            print(f"Cannot find any expense using {card_name} card")\n\n    def _search_by_date(self, start_date: datetime.date, end_date: datetime.date):\n        found_expenses = []\n        for expense in self.total_expenses:\n            if start_date <= expense.expense_date <= end_date:\n                found_expenses.append(expense)\n\n        if found_expenses:\n            print(f"Expenses between {str(start_date)} - {str(end_date)}: ")\n            for e in found_expenses:\n                print(e)\n        else:\n            print(f"Cannot find any expense between {str(start_date)} - {str(end_date)}")\n\n    def _search_by_amount(self, start_amount: float, end_amount: float):\n        found_expenses = []\n        for expense in self.total_expenses:\n            if start_amount <= expense.amount <= end_amount:\n                found_expenses.append(expense)\n\n        if found_expenses:\n            print(f"Expenses with amount in range {start_amount} - {end_amount}: ")\n            for e in found_expenses:\n                print(e)\n        else:\n            print(f"Cannot find any expenses in range {start_amount} - {end_amount}")\n\n    def _search_by_note(self, note):\n        found_expenses = []\n        for expense in self.total_expenses:\n            if expense.note.lower() == note.lower():\n                found_expenses.append(expense)\n\n        if found_expenses:\n            print(f"Expenses with {note} note: ")\n            for e in found_expenses:\n                print(e)\n        else:\n            print(f"Cannot find any expense with {note} note")\n\n    def _get_date_from_user(self, prompt):\n        year = int(input(f"{prompt} YEAR: "))\n        month = int(input(f"{prompt} MONTH: "))\n        day = int(input(f"{prompt} DAY: "))\n\n        return datetime.date(year, month, day)\n\n    def _validate_date(self, date):\n        if not (1 <= date.month <= 12) or not (1 <= date.day <= 31):\n            return False, "Invalid month or day. Please try again."\n        return True, ""\n\n'})}),"\n",(0,a.jsx)(n.h5,{id:"main-class",children:"Main class"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:'title="main.py"',children:'from user import User\n\n\ndef main():\n    quinn = User()\n    quinn.menu()\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"This project has been incredibly engaging and rewarding for me because it offers practical solutions to challenges I encounter in my everyday life."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"One of the most challenging aspects I've faced was ensuring proper data type casting for inputs to enable accurate calculations and processing."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"To enhance user experience, I implemented a menu-driven interface that allows users to select from a variety of tasks. This required a thoughtful restructuring of my code to improve readability and maintainability."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Handling dates presented some complexities; therefore, I utilized the ",(0,a.jsx)(n.code,{children:"datetime.date()"})," method and gathered user input for year, month, and day separately. I also incorporated error-handling mechanisms to account for incorrect date formats or future dates entered by users."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(7294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);