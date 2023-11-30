"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1453],{4787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(5893),i=t(1151);const a={title:"Oct 05, 2023"},s="Coding Journal: Oct 05, 2023",l={id:"learning-journal/October/20231005",title:"Oct 05, 2023",description:"Tree DFS and BFS review",source:"@site/docs/learning-journal/October/20231005.md",sourceDirName:"learning-journal/October",slug:"/learning-journal/October/20231005",permalink:"/my-website/docs/learning-journal/October/20231005",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oct 05, 2023"},sidebar:"tutorialSidebar",previous:{title:"Oct 04, 2023",permalink:"/my-website/docs/learning-journal/October/20231004"},next:{title:"Oct 07, 2023",permalink:"/my-website/docs/learning-journal/October/20231007"}},o={},d=[{value:"Tree DFS and BFS review",id:"tree-dfs-and-bfs-review",level:2},{value:"Tree BFS review",id:"tree-bfs-review",level:3},{value:"Tree DFS review",id:"tree-dfs-review",level:3},{value:"Tree Level Order Traversal (applied BFS)",id:"tree-level-order-traversal-applied-bfs",level:3},{value:"Binary tree path (applied DFS)",id:"binary-tree-path-applied-dfs",level:3},{value:"Maximum depth of a binary tree (applied DFS)",id:"maximum-depth-of-a-binary-tree-applied-dfs",level:3},{value:"Notes:",id:"notes",level:4},{value:"Leetcode",id:"leetcode",level:3},{value:"Majority Elements II",id:"majority-elements-ii",level:5},{value:"Notes:",id:"notes-1",level:4},{value:"Graph practice/review",id:"graph-practicereview",level:3},{value:"Detect cycle in a directed graph",id:"detect-cycle-in-a-directed-graph",level:4},{value:"Notes: What I find struggle in this exercise (by struggle I mean it took me more than 2 days to understand)",id:"notes-what-i-find-struggle-in-this-exercise-by-struggle-i-mean-it-took-me-more-than-2-days-to-understand",level:5},{value:"Flask tutorial",id:"flask-tutorial",level:3},{value:"Set up the application",id:"set-up-the-application",level:5},{value:"Notes:",id:"notes-2",level:6},{value:"Set up databse",id:"set-up-databse",level:5},{value:"Notes:",id:"notes-3",level:6},{value:"Creating tables and columns",id:"creating-tables-and-columns",level:5},{value:"Blueprints and views",id:"blueprints-and-views",level:6},{value:"Notes:",id:"notes-4",level:6},{value:"Creating templates:",id:"creating-templates",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coding-journal-oct-05-2023",children:"Coding Journal: Oct 05, 2023"}),"\n",(0,r.jsx)(n.h2,{id:"tree-dfs-and-bfs-review",children:"Tree DFS and BFS review"}),"\n",(0,r.jsx)(n.h3,{id:"tree-bfs-review",children:"Tree BFS review"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef bfs(root):\n    queue = [root]\n    visited = []\n    traversal = []\n    while queue:\n        node = queue.pop(0)\n        traversal.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(bfs(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tree-dfs-review",children:"Tree DFS review"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef dfs(root):\n    stack = [root]\n    traversal = []\n    while stack:\n        node = stack.pop()\n        traversal.append(node.val)\n        if node.left:\n            stack.append(node.left)\n        if node.right:\n            stack.append(node.right)\n    return traversal\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(dfs(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tree-level-order-traversal-applied-bfs",children:"Tree Level Order Traversal (applied BFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef tree_level_traversal(root):\n    queue = []\n    result = []\n    if not root:\n        return result\n    queue.append(root)\n    while queue:\n        level = len(queue)\n        level_list = []\n        for i in range(level):\n            node = queue.pop(0)\n            level_list.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(level_list)\n    return result\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(tree_level_traversal(root))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"binary-tree-path-applied-dfs",children:"Binary tree path (applied DFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef binary_tree_path(root):\n    if not root:\n        return []\n    paths = []\n    dfs(root, "", paths)\n    return paths\n\n\ndef dfs(node, current_path, paths):\n    if not node:\n        return\n    current_path += str(node.val)\n    if not node.left and not node.right:\n        paths.append(current_path)\n    current_path += str("->")\n    dfs(node.left, current_path, paths)\n    dfs(node.right, current_path, paths)\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    print(binary_tree_path(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"maximum-depth-of-a-binary-tree-applied-dfs",children:"Maximum depth of a binary tree (applied DFS)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Node:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\ndef find_max_depth(root):\n    if not root:\n        return 0\n    leftDepth = find_max_depth(root.left)\n    rightDepth = find_max_depth(root.right)\n\n    return 1 + max(leftDepth, rightDepth)\n\n\ndef findMaxDepth(root):\n    stack = [(root, 1)]\n    max_depth = 0\n    while stack:\n        node, depth = stack.pop()\n        max_depth = max(max_depth, depth)\n        if node.left:\n            stack.append((node.left, depth + 1))\n        if node.right:\n            stack.append((node.right, depth + 1))\n    return max_depth\n\n\ndef main():\n    root = Node(1)\n    root.left = Node(2)\n    root.right = Node(3)\n    root.left.left = Node(4)\n    root.left.right = Node(5)\n    root.left.right.left = Node(6)\n    print(find_max_depth(root))\n    print(findMaxDepth(root))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(n.h4,{id:"notes",children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You may wonder why I did some Tree excises instead of graph, it's because I want to change up a little bit to make this whole learning about DFS and BFS more interesting and maintainable."}),"\n",(0,r.jsx)(n.li,{children:"Tree is like graph at some point. It has neighbor like graph, but for binary tree, it has only two neighbors or also know as children which are left node and right node."}),"\n",(0,r.jsx)(n.li,{children:"If I can do BFS and DFS in graph, I surely should be able to that in Tree."}),"\n",(0,r.jsx)(n.li,{children:"Finding the similarities when solving Tree problems and Graph problems help me understand the concept of DFS and BFS better: when to use stack, when to use queue, does a set of visited node is always needed, can I solve a problem both in recursive and iterative ways, etc. Those are the questions I ask myself when solving these problems so there's no way they are low quality stuffs and I earned nothing from doing them."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"leetcode",children:"Leetcode"}),"\n",(0,r.jsx)(n.h5,{id:"majority-elements-ii",children:"Majority Elements II"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution(object):\n    def majorityElement(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: List[int]\n        """\n        times = len(nums) // 3\n        num_dict = {}\n        result = []\n        for number in nums:\n            if number in num_dict:\n                num_dict[number] += 1\n            else:\n                num_dict[number] = 1\n        for number in num_dict:\n            if num_dict[number] > times:\n                result.append(number)\n        return result\n'})}),"\n",(0,r.jsx)(n.h4,{id:"notes-1",children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I think solving 1-2 Leetcode problems that are not in the graph (BFS and DFS) category don't do any harm to me, because it's intriguing and fun to solve problem that I've never encountered before."}),"\n",(0,r.jsx)(n.li,{children:"What I usually do is solving the daily challenge on Leetcode so I can earn that little tick on my Leetcode calendar (which brings me a little excitement)."}),"\n",(0,r.jsx)(n.li,{children:"After being able to solve that challenge, I expand a little bit by solving the similar or related question."}),"\n",(0,r.jsx)(n.li,{children:"For the above problem, I've tried sliding windows but needed to debug to figure out what's wrong since it didn't return the expected result."}),"\n",(0,r.jsx)(n.li,{children:"Should look at Boyer-Moore solution (do it tomorrow's morning)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"graph-practicereview",children:"Graph practice/review"}),"\n",(0,r.jsx)(n.h4,{id:"detect-cycle-in-a-directed-graph",children:"Detect cycle in a directed graph"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def detectCycle(graph):\n    n = len(graph)\n    visited = [False] * n\n    curPath = [False] * n\n\n    for i in range(n):\n        if not visited[i]:\n            if checkPath(i, graph, visited, curPath):\n                return True\n    return False\n\n\ndef checkPath(v, graph, visited, curPath):\n    visited[v] = True\n    curPath[v] = True\n    \n    for i in range(len(graph)):\n        if graph[v][i] == 1:\n            if not visited[i]:\n                if checkPath(i, graph, visited, curPath):\n                    return True\n        elif curPath[i]:\n            return True\n    curPath[v] = False\n    return False\n"})}),"\n",(0,r.jsx)(n.h5,{id:"notes-what-i-find-struggle-in-this-exercise-by-struggle-i-mean-it-took-me-more-than-2-days-to-understand",children:"Notes: What I find struggle in this exercise (by struggle I mean it took me more than 2 days to understand)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I don't get why I need to have the curStack as mentioned in the provided solution. After drawing it out on paper and white board, I comprehend the curStack as current path (that's why I change its variable name to better understand)"}),"\n",(0,r.jsx)(n.li,{children:"If we see the node that already in the current path, return True as there's a cycle in the graph"}),"\n",(0,r.jsx)(n.li,{children:"Then why don't we just check with the visited? Visited set/list doesn't keep track of the current path that it's going. For example I have 0 -> 1 -> 2 < - 3, node 2 is visited twice but there's no cycle formed. By only checking with visited, it will return True but in reality, it's False since there's no cycle"}),"\n",(0,r.jsx)(n.li,{children:"Then why do we have to mark the curPath[v] = False after we're done with the for loop? To mark that specific node is done traversing the whole graph and there's no cycle connected to that node. Also, that path we're going is checked as finished as well"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"flask-tutorial",children:"Flask tutorial"}),"\n",(0,r.jsx)(n.h5,{id:"set-up-the-application",children:"Set up the application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="flaskr/__init__.py"',children:"import os\n\nfrom flask import Flask\n\n\ndef create_app(test_config=None):\n    app = Flask(__name__, instance_relative_config=True)\n    app.config.from_mapping(\n        SECRET_KEY='dev',\n        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),\n    )\n\n    if test_config is True:\n        app.config.from_pyfile('config.py', silent=True)\n    else:\n        app.config.from_mapping(test_config)\n\n    try:\n        os.makedirs(app.instance_path)\n    except OSError:\n        pass\n\n    @app.route('/hello/')\n    def hello():\n        return 'Hello, World!'\n\n    from . import db\n    db.init_app(app)\n\n    return app\n\n"})}),"\n",(0,r.jsx)(n.h6,{id:"notes-2",children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This file is used to set up the application and connect the database (flaskr.sqlite)"}),"\n",(0,r.jsx)(n.li,{children:"Function hello with url route is some how like views and urls in Django. Function hello which return/display the sentence Hello, World! if the user enter the url with /hello/ endpoint in the browser."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"set-up-databse",children:"Set up databse"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="flaskr/db.py"',children:"import sqlite3\n\nimport click\nfrom flask import current_app, g\n\n\ndef get_db():\n    if 'db' not in g:\n        g.db = sqlite3.connect(\n            current_app.config['DATABASE'],\n            detect_types=sqlite3.PARSE_DECLTYPES\n        )\n\n        g.db.row_factory = sqlite3.Row\n    return g.db\n\n\ndef close_db(e=None):\n    db = g.pop('db', None)\n\n    if db is not None:\n        db.close()\n\n\ndef init_db():\n    db = get_db()\n\n    with current_app.open_resource('schema.sql') as f:\n        db.executescript(f.read().decode('utf'))\n\n\n@click.command('init-db')\ndef init_db_command():\n    init_db()\n    click.echo('Initialized the database.')\n\n\ndef init_app(app):\n    app.teardown_appcontext(close_db)\n    app.cli.add_command(init_db_command)\n"})}),"\n",(0,r.jsx)(n.h6,{id:"notes-3",children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"First function get_db is used to get the existing database. If the dabatase that it's looking for doesn't exist, it will search the currentapp database and connect to it. Therefore, at the end, it will return the required database"}),"\n",(0,r.jsx)(n.li,{children:"init_db will initialize the database got from get_db function by executing SQL commands in schema.sql file"}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"creating-tables-and-columns",children:"Creating tables and columns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",metastring:'title="flaskr/schema.sql"',children:"\nDROP TABLE IF EXISTS user;\nDROP TABLE IF EXISTS post;\n\nCREATE TABLE user (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    username TEXT UNIQUE NOT NULL,\n    password TEXT NOT NULL\n);\n\nCREATE TABLE post (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    author_id INTEGER NOT NULL,\n    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n    title TEXT NOT NULL,\n    body TEXT NOT NULL,\n    FOREIGN KEY (author_id) REFERENCES user (id)\n);\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creating two tables: User and Post with attributes and data types"}),"\n",(0,r.jsx)(n.li,{children:"Post table needs user's id as author_id which is referenced as author_id"}),"\n"]}),"\n",(0,r.jsx)(n.h6,{id:"blueprints-and-views",children:"Blueprints and views"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="flaskr/auth.py"',children:"import functools\n\nfrom flask import (\n    Blueprint, flash, g, redirect, render_template, request, session, url_for\n)\n\nfrom werkzeug.security import check_password_hash, generate_password_hash\n\nfrom flaskr.db import get_db\n\nbp = Blueprint('auth', __name__, url_prefix='/auth')\n\n\n@bp.route('/register', methods=('GET', 'POST'))\ndef register():\n    if request.method == \"POST\":\n        username = request.form['username']\n        password = request.form['password']\n        db = get_db()\n        error = None\n\n        if error is None:\n            try:\n                db.execute(username, generate_password_hash(password))\n                db.commit()\n            except db.IntegrityError:\n                error = f\"User {username} is already registered.\"\n            else:\n                return redirect(url_for(\"auth.login\"))\n        flash(error)\n    return render_template('auth/register.html')\n\n\n@bp.route('/login', methods=('GET', 'POST'))\ndef login():\n    if request.method == 'POST':\n        username = request.form['username']\n        password = request.form['password']\n        db = get_db()\n        error = None\n        user = db.executescript(\n            'SELECT * FROM user WHERE username = ?', (username,)\n        ).fetchone()\n\n        if user is None:\n            error = 'Incorrect username.'\n        elif not check_password_hash(user['password'], password):\n            error = 'Incorrect password.'\n\n        if error is None:\n            session.clear()\n            session['user_id'] = user['id']\n            return redirect(url_for('index'))\n\n        flash(error)\n\n    return render_template('auth/login.html')\n\n\n@bp.before_app_request\ndef load_logged_in_user():\n    user_id = session.get('user_id')\n\n    if user_id is None:\n        g.user = None\n    else:\n        g.user = get_db().execute(\n            'SELECT * FROM user where id = ?', (user_id),\n        ).fetchone()\n\n\n@bp.route('/logout')\ndef logout():\n    session.clear()\n    return redirect(url_for('index'))\n\n\ndef login_required(view):\n    @functools.wraps(view)\n    def wrapped_view(**kwargs):\n        if g.user is None:\n            return redirect(url_for('auth.login'))\n        return view(**kwargs)\n    return wrapped_view\n"})}),"\n",(0,r.jsx)(n.h6,{id:"notes-4",children:"Notes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This file is used to create functions for login/logout and register functions. Since they are all authentication related, these views are created in auth.py file"}),"\n",(0,r.jsx)(n.li,{children:"Functions get username or check if the entered passwords are correct or not by checking input with existing data in the database"}),"\n",(0,r.jsx)(n.li,{children:"At this point, I find Flask and Django are quite similar. They use jinja for templates (will explore later), connect template to views and vice versa, redirect is like reverse_lazy in Django"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"creating-templates",children:"Creating templates:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="flaskr/templates/base.html"',children:'<!doctype html>\n<title>{% block title %}{% endblock %} - Flaskr</title>\n<link rel="stylesheet" href="{{ url_for(\'static\', filename=\'style.css\') }}">\n<nav>\n  <h1>Flaskr</h1>\n  <ul>\n    {% if g.user %}\n      <li><span>{{ g.user[\'username\'] }}</span>\n      <li><a href="{{ url_for(\'auth.logout\') }}">Log Out</a>\n    {% else %}\n      <li><a href="{{ url_for(\'auth.register\') }}">Register</a>\n      <li><a href="{{ url_for(\'auth.login\') }}">Log In</a>\n    {% endif %}\n  </ul>\n</nav>\n<section class="content">\n  <header>\n    {% block header %}{% endblock %}\n  </header>\n  {% for message in get_flashed_messages() %}\n    <div class="flash">{{ message }}</div>\n  {% endfor %}\n  {% block content %}{% endblock %}\n</section>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="flaskr/templates/login.html"',children:'{% extends \'base.html\' %}\n\n{% block header %}\n  <h1>{% block title %}Log In{% endblock %}</h1>\n{% endblock %}\n\n{% block content %}\n  <form method="post">\n    <label for="username">Username</label>\n    <input name="username" id="username" required>\n    <label for="password">Password</label>\n    <input type="password" name="password" id="password" required>\n    <input type="submit" value="Log In">\n  </form>\n{% endblock %}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",metastring:'title="flaskr/templates/register.html"',children:'{% extends \'base.html\' %}\n\n{% block header %}\n  <h1>{% block title %}Register{% endblock %}</h1>\n{% endblock %}\n\n{% block content %}\n  <form method="post">\n    <label for="username">Username</label>\n    <input name="username" id="username" required>\n    <label for="password">Password</label>\n    <input type="password" name="password" id="password" required>\n    <input type="submit" value="Register">\n  </form>\n{% endblock %}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(7294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);