"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1451],{1458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(5893),r=n(1151);const a={title:"Nov 26, 2023"},i="Coding Journal: Nov 26, 2023",l={id:"learning-journal/November/20231126",title:"Nov 26, 2023",description:"* Continued with my Automate Spotify Python project. Added all functions I need and set up task schedule to automatically add tracks to chosen playlist, which will happen every hour and every Monday. So I have to wait till tomorrow to know if it works or not.",source:"@site/docs/learning-journal/November/20231126.md",sourceDirName:"learning-journal/November",slug:"/learning-journal/November/20231126",permalink:"/my-website/docs/learning-journal/November/20231126",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Nov 26, 2023"},sidebar:"tutorialSidebar",previous:{title:"Nov 25, 2023",permalink:"/my-website/docs/learning-journal/November/20231125"},next:{title:"Nov 27, 2023",permalink:"/my-website/docs/learning-journal/November/20231127"}},o={},d=[];function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"coding-journal-nov-26-2023",children:"Coding Journal: Nov 26, 2023"}),"\n",(0,s.jsx)(t.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Continued with my Automate Spotify Python project. Added all functions I need and set up task schedule to automatically add tracks to chosen playlist, which will happen every hour and every Monday. So I have to wait till tomorrow to know if it works or not."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"I did test and try corntab before applying to the project."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Learned about cron and crontab to schedule tasks."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"What are cron and crontabs?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Cron is the system's main schedule for running jobs or task unattended."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"A command called crontab allows the user to submit, edit, or delete entries to cron."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Assign arguments for the parser.add_argument()"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'I get confused about some attributes such as nargs, default, action="store_true", const, etc:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'nargs is the number of arguments needed, it can be "?" (a single value which can be optional), "+" (1 or many), or "*" (zero or many)'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'The order of the command lines and given functions. For example when I run the command "-d" to view tracks from current Day List playlist, it shows the saved tracks first then the tracks from the current Day List, which means the view_saved_tracks() functions has been called and runs before the view_daylist_tracks() although I just want to see the Day List Playlist\'s track'}),"\n",(0,s.jsx)(t.p,{children:"=> Have to take a look at the give arguments in both functions."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Using crontab. There are two commands that I used the most which are "crontab -l" to list out current active crontab and "crontab -e" to edit or create new crontab to schedule task. However, the problem lies in the permission to access a file and to excute the script or a program. Therefore, before creating any task schedule with crontab, I need to give the permission to read and excute to the specified file (chmod a+x filename)'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Couldn't run a Python module directly from crontab so I have to write scripts and make the crontab run them instead. Script is a sequence of instruction that is interpreted or carried out by another program rather than by the computer processor. I wrote daylist.sh script anbd weekly.sh script with the commandlines to run the specific functions I wanted."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="automate_spotify.py"',children:'import os\nimport spotipy\nfrom spotipy.oauth2 import SpotifyOAuth\n\n\nCLIENT_ID = "your-client-id"\nCLIENT_SECRET = "your-client-secret"\n\n# Set up Authorization\nos.environ["SPOTIPY_CLIENT_ID"] = CLIENT_ID\nos.environ["SPOTIPY_CLIENT_SECRET"] = CLIENT_SECRET\nos.environ["SPOTIPY_REDIRECT_URI"] = "http://localhost:9000"\nscope = ["user-library-read user-library-modify playlist-modify-public"]\n\n# Set up spotipy.client.Spotify object which is authenticated\nsp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))\n\n\ndef view_user_info():\n    user = sp.current_user()\n    print("--User Info--")\n    print("Name:", user["display_name"])\n    print("Total followers:", user["followers"]["total"])\n    print()\n    return user\n\n\ndef view_user_playlists():\n    user_current_playlists = sp.current_user_playlists()\n    print("--User Current Playlists---")\n    for playlist in user_current_playlists["items"]:\n        print("Playlist\'s name:", playlist["name"])\n        print("Playlist\'s ID:", playlist["id"])\n        print("Playlist\'s description:", playlist["description"])\n        print("Total tracks:", playlist["tracks"]["total"])\n        print("*")\n    print()\n\n\ndef view_user_saved_tracks(amount):\n    user_current_saved_tracks = sp.current_user_saved_tracks()\n    print("--User Current Saved Tracks--")\n    print(f"First {amount} current saved tracks")\n    for i in range(len(user_current_saved_tracks["items"][:amount])):\n        current_track = user_current_saved_tracks["items"][i]["track"]\n        print("Track\'s name:", current_track["name"])\n        print("Track\'s album:", current_track["album"]["name"])\n        print("Track\'s artist:", current_track["artists"][0]["name"])\n        print("*")\n    print()\n\n\ndef view_weekly_discovery_tracks():\n    weekly_playlist_url = "https://open.spotify.com/playlist/37i9dQZEVXcSl5JcFboUlo?si=105e91e417bc41a0"\n    weekly_playlist = sp.playlist(playlist_id=weekly_playlist_url)\n    print("---Discover Weekly Tracks---")\n    for track in weekly_playlist["tracks"]["items"]:\n        print("Track\'s name:", track["track"]["name"])\n        print("Artist:", track["track"]["artists"][0]["name"])\n        print("Track\'s ID:", track["track"]["id"])\n        print("*")\n    print()\n\n\ndef view_day_list_tracks():\n    day_list_url = "https://open.spotify.com/playlist/37i9dQZF1EP6YuccBxUcC1?si=e772f4d4e4c547f4"\n    day_list_playlist = sp.playlist(playlist_id=day_list_url)\n    print("---Current Day List Tracks---")\n    for track in day_list_playlist["tracks"]["items"]:\n        track_info = track["track"]\n        print("Name:", track_info["name"])\n        print("Artist:", track_info["artists"][0]["name"])\n        print("Album:", track_info["album"]["name"])\n        print("*")\n    print()\n\n\ndef create_playlist(name, description=""):\n    user = sp.current_user()\n    # Make sure there\'s no duplicated playlist name\n    user_playlists = sp.current_user_playlists()\n    for playlist in user_playlists["items"]:\n        if playlist["name"] == name:\n            print("Playlist name already exists. Please choose another one")\n            return\n    new_playlist = sp.user_playlist_create(user=user["id"], name=name, public=True, collaborative=False, description=description)\n    print(f"Playlist {name} has been created")\n\n\ndef add_songs_to_playlist(playlist_id, items):\n    playlist = sp.playlist_add_items(playlist_id=playlist_id, items=items)\n    print(f"Songs have been added to the playlist.")\n\n\ndef add_songs_from_daylist_playlist(playlist_id):\n    daylist_url = "https://open.spotify.com/playlist/37i9dQZF1EP6YuccBxUcC1?si=f5d4859eafbd461c"\n    daylist_tracks = sp.playlist_items(playlist_id=daylist_url)\n\n    # Get Day List\'s tracks\' ID\n    tracks_id = []\n    for track in daylist_tracks["items"]:\n        tracks_id.append(track["track"]["id"])\n\n    # Add Day List\'s tracks to the given playlist\n    playlist = sp.playlist_add_items(playlist_id=playlist_id, items=tracks_id)\n    print("All songs from current Day List Playlist have been added.")\n\n\ndef add_songs_from_weekly_playlist(playlist_id):\n    weekly_url = "https://open.spotify.com/playlist/37i9dQZEVXcSl5JcFboUlo"\n    weekly_tracks = sp.playlist_items(playlist_id=weekly_url)\n\n    # Get Discover Weekly\'s tracks\' ID\n    tracks_id = []\n    for track in weekly_tracks["items"]:\n        tracks_id.append(track["track"]["id"])\n\n    # Add Discover Weekly\'s tracks to the give playlist\n    playlist = sp.playlist_add_items(playlist_id=playlist_id, items=tracks_id)\n    print("All songs from this week Discover Weekly Playlist have been added.") \n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="main.py"',children:'import argparse\nfrom automate_spotify import *\n\n\ndef main():\n    parser = argparse.ArgumentParser(description="A Python CLI tool for managing Spotify playlists and tracks.")\n    parser.add_argument("-u", "--user", action="store_true", help="Display the user\'s Spotify profile information.")\n    parser.add_argument("-p", "--playlists", action="store_true", help="List all playlists in the user\'s Spotify account.")\n    parser.add_argument("-t", "--tracks", type=int, help="Display a specified number of saved tracks from the user\'s account.")\n    parser.add_argument("-w", "--weekly", action="store_true", help="Show the user\'s Discover Weekly playlist curated by Spotify.")\n    parser.add_argument("-d", "--daylist", action="store_true", help="Show the user\'s current Day List Playlist curated by Spotify.")\n    parser.add_argument("-c", "--create", type=str, help="Create a new playlist. Playlist\'s name is required and description is optional.")\n    parser.add_argument("-a", "--add", type=str, help="Add songs to an existing playlist. Enter playlist\'s URL.")\n    parser.add_argument("-ad", "--adddaylist", type=str, help="Add tracks from Day List to a specified playlist. Enter playlist\'s URL.")\n    parser.add_argument("-aw", "--addweekly", type=str, help="Add tracks from Discover Weekly to a specified playlist. Enter playlist\'s URL.")\n\n    parser.add_argument("-de", "--description", type=str, help="Set a description for a new playlist being created.")\n    parser.add_argument("-so", "--songs", type=str, nargs="+", help="Add a list of songs URLs to a specified playlist.")\n\n    args = parser.parse_args()\n\n    if args.user:\n        print("*** You are viewing user info ***")\n        view_user_info()\n    elif args.playlists:\n        print("*** You are viewing user playlists ***")\n        view_user_playlists()\n    elif args.tracks:\n        print("*** You are viewing user saved tracks ***")\n        view_user_saved_tracks(args.tracks)\n    elif args.weekly:\n        print("*** You are viewing this week Discover Weekly playlist\'s tracks ***")\n        view_weekly_discovery_tracks()\n    elif args.daylist:\n        print("*** You are viewing user\'s current Day List playlist\'s track ***")\n        view_day_list_tracks()\n    elif args.create:\n        print("*** New playlist is being created ***")\n        create_playlist(args.create, args.description)\n    elif args.add and args.songs:\n        print("*** Songs are being added to your playlist ***")\n        add_songs_to_playlist(args.add, args.songs)\n    elif args.adddaylist:\n        print("*** Songs from Day List playlist have been added to your playlist ***")\n        add_songs_from_daylist_playlist(args.adddaylist)\n    elif args.addweekly:\n        print("*** Songs from Discover Weekly playlist have been added to your playlist ***")\n        add_songs_from_weekly_playlist(args.addweekly)\n    else:\n        print("Invalid command.")\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);