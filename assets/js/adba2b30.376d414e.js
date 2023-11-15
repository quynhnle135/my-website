"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"Sep 26"},r=void 0,s={unversionedId:"learning-journal/2023/September/sep_26_23",id:"learning-journal/2023/September/sep_26_23",title:"Sep 26",description:"Flask Task Manager application",source:"@site/docs/learning-journal/2023/September/sep_26_23.md",sourceDirName:"learning-journal/2023/September",slug:"/learning-journal/2023/September/sep_26_23",permalink:"/my-website/docs/learning-journal/2023/September/sep_26_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Sep 26"},sidebar:"tutorialSidebar",previous:{title:"Sep 24",permalink:"/my-website/docs/learning-journal/2023/September/sep_24_23"},next:{title:"Sep 27",permalink:"/my-website/docs/learning-journal/2023/September/sep_27_23"}},o={},p=[{value:"Flask Task Manager application",id:"flask-task-manager-application",level:3},{value:"Setting up",id:"setting-up",level:5},{value:"Creat Flask app and some functions to add, check, and delete task",id:"creat-flask-app-and-some-functions-to-add-check-and-delete-task",level:5},{value:"Notes",id:"notes",level:4},{value:"Notes:",id:"notes-1",level:4},{value:"Run the app",id:"run-the-app",level:3},{value:"Flaskr project",id:"flaskr-project",level:2},{value:"Setting up the project",id:"setting-up-the-project",level:5},{value:"Create Application factory",id:"create-application-factory",level:4},{value:"Notes:",id:"notes-2",level:5},{value:"Setting up the database",id:"setting-up-the-database",level:4},{value:"Notes:",id:"notes-3",level:5},{value:"Setting up databse with SQL",id:"setting-up-databse-with-sql",level:3},{value:"Notes:",id:"notes-4",level:5},{value:"Initialize and connect database to app",id:"initialize-and-connect-database-to-app",level:5},{value:"Successfully connect databse",id:"successfully-connect-databse",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"flask-task-manager-application"},"Flask Task Manager application"),(0,i.kt)("h5",{id:"setting-up"},"Setting up"),(0,i.kt)("p",null,"Set up virtual environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"python3 -m venv .venv\n")),(0,i.kt)("p",null,"Activate .venv virtual environment "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"source .venv/bim/activate\n")),(0,i.kt)("p",null,"Install Flask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"pip install flask\n")),(0,i.kt)("h5",{id:"creat-flask-app-and-some-functions-to-add-check-and-delete-task"},"Creat Flask app and some functions to add, check, and delete task"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from flask import Flask, render_template, request, redirect, url_for\n\napp = Flask(__name__)\ntasks = []\n\n@app.route("/")\ndef index():\n    return render_template("index.html", tasks=tasks)\n\n\n@app.route("/add", methods=[\'POST\'])\ndef add_task():\n    task_name = request.form.get("task_name")\n    tasks.append({"name": task_name, "completed": False})\n    return redirect(url_for("index"))\n\n\n@app.route("/complete/<int:task_id>")\ndef complete_task(task_id):\n    tasks[task_id]["completed"] = True\n    return redirect(url_for("index"))\n\n\n@app.route("/delete/<int:task_id>")\ndef delete_task(task_id):\n    tasks.pop(task_id)\n    return redirect(url_for("index"))\n')),(0,i.kt)("h4",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I find it's easy for me to understand when I compare the things I'm learning with the one that I'm familiar with. For this case, I tried to find the similarity between Flask and Django"),(0,i.kt)("li",{parentName:"ul"},"Beause there will be many tasks so I created an empty list, each task will be stored as a dictionary with name and completed as keys"),(0,i.kt)("li",{parentName:"ul"},"app.route() is a decorate to set up the url for the function defined below"),(0,i.kt)("li",{parentName:"ul"},"Similar to Django, Flask also use templates and jinja to work and display data"),(0,i.kt)("li",{parentName:"ul"},'When you create a task, it means you create something new and "post" it to the database, so the method for add_task is POST. '),(0,i.kt)("li",{parentName:"ul"},"When a task is sucessfully added, it will direct user to index page (similar to reverse_lazy in Django)"),(0,i.kt)("li",{parentName:"ul"},"The task_id comes from the URL itself since each task will have its own ID "),(0,i.kt)("li",{parentName:"ul"},'This is a small project so my "database" is the list of tasks I created first thing.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="templates/index.html"',title:'"templates/index.html"'},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Task Manager</title>\n</head>\n<body>\n    <h1>Task Manager</h1>\n\n    <form action="/add" method="post">\n        <input type="text" name="task_name" placeholder="New Task" required>\n        <button type="submit">Add</button>\n    </form>\n\n    <ul>\n        {% for task in tasks %}\n            <li>\n                {{ task["name"] }}\n                {% if not task["completed"] %}\n                    <a href="/complete/{{ loop.index0 }}">Complete</a>\n                {% endif %}\n                <a href="/delete/{{ loop.index0 }}">Delete</a>\n            </li>\n        {% endfor %}\n    </ul>\n</body>\n</html>\n')),(0,i.kt)("h4",{id:"notes-1"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating templates with Flask is very similar to Django"),(0,i.kt)("li",{parentName:"ul"},'With the form, I need to add function "add" as my action to let it know that the application adds new task using add_task fucntion declared in app.py with POST method'),(0,i.kt)("li",{parentName:"ul"},"A special thing is loop.index0 (this is number zero, not uppercase o). Since complete and delete functions need task_id, while looping thru each task, it requires index as id so that's why it's necessary and required there"),(0,i.kt)("li",{parentName:"ul"},"Remember to close the if-else statement and for loop. I forgot and the code didn't run")),(0,i.kt)("h3",{id:"run-the-app"},"Run the app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"flask --app app run\n")),(0,i.kt)("h2",{id:"flaskr-project"},"Flaskr project"),(0,i.kt)("p",null,"Code along Flask documentations"),(0,i.kt)("h5",{id:"setting-up-the-project"},"Setting up the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"python3 -m venv .venv\n\n# acticvate .venv \nsource .vemv/bin/activate\n\n# install flask\npip install flask\n\n")),(0,i.kt)("h4",{id:"create-application-factory"},"Create Application factory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="flaskr/__init__.py"',title:'"flaskr/__init__.py"'},"import os\n\nfrom flask import Flask\n\n\ndef create_app(test_config=None):\n    # create and configure the app\n    app = Flask(__name__, instance_relative_config=True)\n    app.config.from_mapping(\n        SECRET_KEY='dev',\n        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),\n    )\n\n    if test_config is None:\n        # load the instance config, if it exists, when not testing\n        app.config.from_pyfile('config.py', silent=True)\n    else:\n        # load the test config if passed in\n        app.config.from_mapping(test_config)\n\n    # ensure the instance folder exists\n    try:\n        os.makedirs(app.instance_path)\n    except OSError:\n        pass\n\n    # a simple page that says hello\n    @app.route(\"/hello/\")\n    def hello():\n        return \"Hello, World!\"\n\n    return app\n")),(0,i.kt)("h5",{id:"notes-2"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Even though this is the start and the set up but it's really confusing to me."),(0,i.kt)("li",{parentName:"ul"},"Is it different to normal app set up by importing Flask and create app = Flask(",(0,i.kt)("strong",{parentName:"li"},"name_"),")? "),(0,i.kt)("li",{parentName:"ul"},"Obviously, since it looks longer and much complicated. Here it's try to connect SQLite database and test"),(0,i.kt)("li",{parentName:"ul"},"We can also work with urls and views/function in this factory")),(0,i.kt)("h4",{id:"setting-up-the-database"},"Setting up the database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="flaskr/db.py"',title:'"flaskr/db.py"'},"import sqlite3\n\nimport click\nfrom flask import current_app, g\n\n\ndef get_db():\n    if 'db' not in g:\n        g.db = sqlite3.connect(\n            current_app.config['DATABASE'],\n            detect_types=sqlite3.PARSE_DECLTYPES\n        )\n        g.db.row_factory = sqlite3.Row\n\n    return g.db\n\n\ndef close_db(e=None):\n    db = g.pop('db', None)\n\n    if db is not None:\n        db.close()\n\n\ndef init_db():\n    db = get_db()\n\n    with current_app.open_resource('schema.sql') as f:\n        db.executescript(f.read().decode('utf8'))\n\n\n@click.command('init-db')\ndef init_db_command():\n    \"\"\"Clear the existing data and create new tables.\"\"\"\n    init_db()\n    click.echo('Initialized the database.')\n\n\ndef init_app(app):\n    app.teardown_appcontext(close_db)\n    app.cli.add_command(init_db_command)\n")),(0,i.kt)("h5",{id:"notes-3"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"g is a global object in Flask to store data"),(0,i.kt)("li",{parentName:"ul"},"if there's no existing database, it will create a new sqlite3 databse "),(0,i.kt)("li",{parentName:"ul"},"close_db function is used to remove database "),(0,i.kt)("li",{parentName:"ul"},"init_db to innitialize databsae writing with SQL below"),(0,i.kt)("li",{parentName:"ul"},"init_apop is used to connect the database with the app ")),(0,i.kt)("h3",{id:"setting-up-databse-with-sql"},"Setting up databse with SQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="flaskr/schema.sql"',title:'"flaskr/schema.sql"'},"DROP TABLE IF EXISTS user;\nDROP TABLE IF EXISTS post;\n\nCREATE TABLE user (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  username TEXT UNIQUE NOT NULL,\n  password TEXT NOT NULL\n);\n\nCREATE TABLE post (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  author_id INTEGER NOT NULL,\n  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  title TEXT NOT NULL,\n  body TEXT NOT NULL,\n  FOREIGN KEY (author_id) REFERENCES user (id)\n);\n")),(0,i.kt)("h5",{id:"notes-4"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Here I need to create 2 tables: user and post"),(0,i.kt)("li",{parentName:"ul"},"user table will have 3 attributes: id, username, and password"),(0,i.kt)("li",{parentName:"ul"},"pst tbale have user as foreign key since it requires user_id ")),(0,i.kt)("h5",{id:"initialize-and-connect-database-to-app"},"Initialize and connect database to app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="flaskr/__init__.py"',title:'"flaskr/__init__.py"'},"    ...\n    from . import db\n    db.init_app(app)\n")),(0,i.kt)("h4",{id:"successfully-connect-databse"},"Successfully connect databse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-command"},"flask --app flaskr init-db\n>>> Initialized the database.\n\n")))}u.isMDXComponent=!0}}]);